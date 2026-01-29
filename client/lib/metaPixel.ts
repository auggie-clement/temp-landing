// Meta Pixel helpers for a React SPA, backed by react-facebook-pixel.
//
// This module provides safe wrappers for:
// - PageView (for SPA route changes)
// - InitiateCheckout (when user clicks your Stripe Payment Link)
// - Purchase (on thank-you page after successful payment)
//
// The Pixel base script is injected by react-facebook-pixel.
// If you previously had the base snippet in index.html, remove it to avoid
// duplicate PageView events on initial load.

import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = "1413128283786699";
let isInitialized = false;

export type CurrencyCode = string;

function canUsePixel(): boolean {
  return typeof window !== "undefined";
}

export function initMetaPixel(): void {
  if (!canUsePixel() || isInitialized) return;
  ReactPixel.init(PIXEL_ID);
  isInitialized = true;
}

/**
 * Track a Meta Pixel event safely.
 * If the pixel is not available yet, this is a no-op.
 */
export function track(
  eventName: string,
  params?: Record<string, any>,
  options?: Record<string, any>,
): void {
  if (!canUsePixel()) return;
  if (!isInitialized) initMetaPixel();

  if (options) {
    ReactPixel.fbq("track", eventName, params ?? {}, options);
    return;
  }

  if (params) {
    ReactPixel.track(eventName, params);
    return;
  }

  ReactPixel.track(eventName);
}

export function trackPageView(): void {
  if (!canUsePixel()) return;
  if (!isInitialized) initMetaPixel();
  ReactPixel.pageView();
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
