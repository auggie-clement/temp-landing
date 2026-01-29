import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { trackPurchase } from "@/lib/metaPixel";

/**
 * Notes:
 * - This page expects Stripe to redirect to:
 *   /thank-you?session_id={CHECKOUT_SESSION_ID}
 * - It fires a Meta Pixel Purchase event using the Stripe Checkout Session ID
 *   as the eventID for deduplication.
 */

const PURCHASE_VALUE = 49.0;
const PURCHASE_CURRENCY = "USD";

function getFirstParam(
  searchParams: URLSearchParams,
  keys: string[],
): string | null {
  for (const k of keys) {
    const v = searchParams.get(k);
    if (v && v.trim().length > 0) return v.trim();
  }
  return null;
}

export default function ThankYou() {
  const [searchParams] = useSearchParams();

  const sessionId = useMemo(() => {
    // Common patterns people use with Stripe redirects:
    // - ?session_id={CHECKOUT_SESSION_ID} (Stripe docs + examples)
    // - ?checkout_session_id=...
    // - ?sessionId=...
    return getFirstParam(searchParams, [
      "session_id",
      "checkout_session_id",
      "sessionId",
    ]);
  }, [searchParams]);

  useEffect(() => {
    if (!sessionId) return;

    // Avoid firing multiple times on refresh/back navigation.
    const eventId = sessionId;
    const storageKey = `fbq_purchase_tracked_${eventId}`;

    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        const alreadyTracked =
          window.sessionStorage.getItem(storageKey) === sessionId;
        if (alreadyTracked) return;
      }
    } catch {
      // If storage isn't available, still attempt to track once.
    }

    trackPurchase({
      value: PURCHASE_VALUE,
      currency: PURCHASE_CURRENCY,
      eventID: sessionId,
    });

    try {
      window.sessionStorage?.setItem(storageKey, sessionId);
    } catch {
      // ignore
    }
  }, [sessionId]);

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border border-black/10 bg-white/80 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600/10">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-emerald-700"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.35 7.403a1 1 0 0 1-1.42.004L3.29 9.46a1 1 0 1 1 1.414-1.414l3.53 3.53 6.643-6.687a1 1 0 0 1 1.427.4Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                Thank you for your purchase
              </h1>
              <p className="mt-2 text-slate-600">
                Your payment went through successfully. You’ll receive a
                confirmation email shortly.
              </p>

              {/* <div className="mt-4 rounded-lg bg-black/5 px-4 py-3 text-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-slate-600">Order reference</span>
                  <span className="font-mono text-slate-900">
                    {sessionId ?? "—"}
                  </span>
                </div>
              </div> */}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Back to home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
                >
                  Contact support
                </Link>
              </div>

              {/* <p className="mt-6 text-xs text-slate-500">
                If you refreshed this page and don’t see an order reference, make
                sure your Stripe redirect URL includes{" "}
                <span className="font-mono">?session_id=&#123;CHECKOUT_SESSION_ID&#125;</span>.
              </p> */}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} The Honest Herbalist
        </p>
      </div>
    </main>
  );
}
