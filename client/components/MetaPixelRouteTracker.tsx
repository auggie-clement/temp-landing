import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/metaPixel";

/**
 * In SPAs, the Meta Pixel base snippet's PageView fires only on the initial load.
 * This component fires PageView again on every route change.
 *
 * Usage:
 *   <BrowserRouter>
 *     <MetaPixelRouteTracker />
 *     <App />
 *   </BrowserRouter>
 */
export default function MetaPixelRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}
