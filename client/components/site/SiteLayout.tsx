import { ShoppingCart } from "lucide-react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="leading-none text-center">
        <div className="text-[18px] font-bold tracking-[0.2em] text-[var(--color-heading)] font-heading uppercase">
          THE HONEST
        </div>
        <div className="text-[18px] font-bold tracking-[0.2em] text-[var(--color-heading)] font-heading uppercase">
          HERBALIST
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="w-full relative z-[60]">
      <div className="bg-emerald-700 text-white text-[14px] sm:text-[17px] font-black tracking-[0.15em] py-2 sm:py-3 uppercase sticky top-0 z-[70] border-b border-border">
        <div className="container px-4 sm:px-[var(--container-pad)] text-center">
          TODAY ONLY: GET 61% OFF + 3 FREE BONUSES WITH YOUR PURCHASE!
        </div>
      </div>
      <div className="border-b border-border bg-white py-6">
        <div className="container px-4 sm:px-[var(--container-pad)] flex items-center justify-center">
          <Link to="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--footer-border)] pt-20 pb-24">
      <div className="container px-4 sm:px-[var(--container-pad)]">
        <div className="flex flex-col items-center text-center">
          <Logo />

          <nav className="mt-12 mb-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[14px] text-[var(--color-text)] font-bold uppercase tracking-widest">
              <li>
                <Link className="hover:text-[var(--color-link)] transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li className="text-[var(--color-border)]">|</li>
              <li>
                <Link className="hover:text-[var(--color-link)] transition-colors" to="/refund-policy">
                  Refund Policy
                </Link>
              </li>
              <li className="text-[var(--color-border)]">|</li>
              <li>
                <Link className="hover:text-[var(--color-link)] transition-colors" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="text-[var(--color-border)]">|</li>
              <li>
                <Link className="hover:text-[var(--color-link)] transition-colors" to="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
              <li className="text-[var(--color-border)]">|</li>
              <li>
                <Link className="hover:text-[var(--color-link)] transition-colors" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-[13px] text-[var(--color-muted)] max-w-2xl leading-[var(--line)] uppercase tracking-[0.1em] font-medium">
            © 2026 THE HONEST HERBALIST. ALL RIGHTS RESERVED.
            <br />
            BUILT FOR SELF-RELIANT FAMILIES WHO CHOOSE NATURAL HEALTH FIRST.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
