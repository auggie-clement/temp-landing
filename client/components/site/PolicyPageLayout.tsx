import type { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

type PolicyPageLayoutProps = PropsWithChildren<{
  title: string;
  lastUpdated: string;
  description?: ReactNode;
}>;

/**
 * Shared layout + typography for legal/support pages.
 * Keeps spacing, container width, and type scale consistent with the lander.
 */
export function PolicyPageLayout({
  title,
  lastUpdated,
  description,
  children,
}: PolicyPageLayoutProps) {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-[#fcfdfc] border-b border-slate-100 py-14 sm:py-20">
        <div className="container px-4 sm:px-[var(--container-pad)]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[12px] sm:text-[13px] font-black uppercase tracking-[0.25em] text-brand-700">
              THE HONEST HERBALIST
            </div>
            <h1 className="mt-5 text-[34px] sm:text-[48px] font-black tracking-tight font-heading text-[var(--color-heading)] leading-[1.12]">
              {title}
            </h1>
            <div className="mt-6 text-[12px] sm:text-[13px] font-black uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Last updated: {lastUpdated}
            </div>
            {description ? (
              <div className="mt-8 text-[20px] sm:text-[22px] leading-[var(--line)] text-[var(--color-text)] font-medium">
                {description}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20">
        <div className="container px-4 sm:px-[var(--container-pad)]">
          <article
            className={
              "mx-auto max-w-3xl text-[20px] sm:text-[22px] leading-[var(--line)] text-[var(--color-text)] font-medium " +
              "space-y-6 " +
              "[&_h2]:mt-12 [&_h2]:text-[28px] sm:[&_h2]:text-[34px] [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:font-heading [&_h2]:text-[var(--color-heading)] [&_h2]:leading-[1.2] " +
              "[&_h3]:mt-8 [&_h3]:text-[22px] sm:[&_h3]:text-[26px] [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:font-heading [&_h3]:text-[var(--color-heading)] [&_h3]:leading-[1.25] " +
              "[&_p]:text-pretty " +
              "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 " +
              "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 " +
              "[&_li]:text-pretty " +
              "[&_strong]:text-[var(--color-heading)] [&_strong]:font-bold " +
              "[&_a]:text-[var(--color-link)] hover:[&_a]:underline focus-visible:[&_a]:outline-none"
            }
          >
            {children}
          </article>

          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <Link to="/" className="cta-primary">
              Return to Home →
            </Link>
            <div className="text-[12px] sm:text-[13px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Need help? Email{" "}
              <a href="mailto:support@thehonestherbalist.com">support@thehonestherbalist.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
