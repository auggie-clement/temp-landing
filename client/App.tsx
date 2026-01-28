import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SiteLayout>
                <Index />
              </SiteLayout>
            }
          />
          <Route
            path="/refund-policy"
            element={
              <SiteLayout>
                <RefundPolicy />
              </SiteLayout>
            }
          />
          <Route
            path="/thank-you"
            element={
              <SiteLayout>
                <ThankYou />
              </SiteLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <SiteLayout>
                <PrivacyPolicy />
              </SiteLayout>
            }
          />
          <Route
            path="/shipping-policy"
            element={
              <SiteLayout>
                <ShippingPolicy />
              </SiteLayout>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <SiteLayout>
                <TermsOfService />
              </SiteLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <SiteLayout>
                <Contact />
              </SiteLayout>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <SiteLayout>
                <NotFound />
              </SiteLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
