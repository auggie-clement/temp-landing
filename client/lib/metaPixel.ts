// Meta Pixel helpers for a React SPA.
//
// Assumptions:
// - The Meta Pixel base snippet is already present in index.html and calls:
//     fbq('init', '<PIXEL_ID>');
//     fbq('track', 'PageView');
//
// This module adds safe wrappers for:
// - PageView (for SPA route changes)
// - InitiateCheckout (when user clicks your Stripe Payment Link)
// - Purchase (on thank-you page after successful payment)
//
// Docs:
// - Standard events: https://www.facebook.com/business/help/402791146561655
// - Pixel reference: https://developers.facebook.com/docs/meta-pixel/reference

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export type CurrencyCode = string;

export function hasFbq(): boolean {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

/**
 * Track a Meta Pixel event safely.
 * If the pixel is not available yet, this is a no-op.
 */
export function track(
  eventName: string,
  params?: Record<string, any>,
  options?: Record<string, any>
): void {
  if (!hasFbq()) return;

  if (options) {
    window.fbq!("track", eventName, params ?? {}, options);
    return;
  }

  if (params) {
    window.fbq!("track", eventName, params);
    return;
  }

  window.fbq!("track", eventName);
}

export function trackPageView(): void {
  track("PageView");
}

export type InitiateCheckoutParams = {
  value?: number;
  currency?: CurrencyCode;
  num_items?: number;
  content_name?: string;
};

/**
 * Fire when the user begins checkout (e.g. clicks your Stripe Payment Link).
 */
export function trackInitiateCheckout(params: InitiateCheckoutParams): void {
  // Meta recommends value + currency for purchase-related events
  // (and optional num_items).
  track("InitiateCheckout", {
    ...params,
  });
}

export type PurchaseParams = {
  value: number;
  currency: CurrencyCode;
  eventID?: string; // used for dedup (esp. if you also send Conversions API)
};

/**
 * Fire Purchase after successful payment.
 * If you have a Stripe Checkout Session ID, pass it as eventID.
 */
export function trackPurchase(params: PurchaseParams): void {
  const { eventID, ...rest } = params;
  if (eventID) {
    track("Purchase", rest, { eventID });
  } else {
    track("Purchase", rest);
  }
}

/**
 * Simple dedupe helper (prevents firing the same event multiple times on refresh/back).
 */
export function wasEventFired(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

export function markEventFired(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {
    // ignore
  }
}
