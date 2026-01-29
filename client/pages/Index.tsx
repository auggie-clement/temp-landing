import {
  AlertTriangle,
  BadgeCheck,
  BookOpen,
  Check,
  CircleDollarSign,
  Clock,
  CreditCard,
  Droplet,
  FileText,
  Flame,
  Flower,
  Leaf,
  ListChecks,
  Lock,
  Ruler,
  Search,
  ShieldAlert,
  ShieldCheck,
  Star,
  Stethoscope,
  Thermometer,
  Utensils,
  Zap,
} from "lucide-react";
import type { FormEvent, MouseEvent, ReactNode } from "react";
import { useCallback, useMemo, useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { trackInitiateCheckout } from "@/lib/metaPixel";

function ImagePlaceholder({
  className,
  label,
  overlay,
}: {
  className?: string;
  label: string;
  overlay?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-white shadow-soft",
          overlay && "translate-x-4 translate-y-4 z-10",
        )}
      >
        <div className="relative flex h-full w-full items-center justify-center p-8 text-center">
          <div>
            <div className="mx-auto h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center shadow-inner">
              <BookOpen className="h-10 w-10 text-brand-700" />
            </div>
            <div className="mt-6 text-[12px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)] font-heading">
              {label}
            </div>
          </div>
        </div>
      </div>
      {overlay && (
        <div className="absolute top-0 left-0 w-full h-full -translate-x-4 -translate-y-4 rounded-2xl border border-border bg-slate-50/50" />
      )}
    </div>
  );
}

function PrimaryCTA({
  children,
  onClick,
  className,
}: {
  children: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("cta-primary", className)}
    >
      {children}
    </button>
  );
}

function SectionTitle({
  title,
  subtitle,
  dark,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2
        className={cn(
          "text-3xl sm:text-[var(--heading-size)] font-bold tracking-tight font-heading leading-[var(--heading-line)]",
          dark ? "text-white" : "text-[var(--color-heading)]",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-6 text-[20px] sm:text-[24px] leading-[var(--line)]",
            dark ? "text-white/70" : "text-[var(--color-muted)]",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function CardFeature({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start text-left p-10 group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 h-full focus-within:ring-2 focus-within:ring-brand-700 focus-within:ring-offset-2">
      <div className="text-brand-700 mb-10 group-hover:scale-110 transition-transform duration-500">
        <div className="h-20 w-20 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
          {icon}
        </div>
      </div>
      <div className="text-[24px] font-bold font-heading text-[var(--color-heading)] uppercase tracking-tight mb-6 leading-tight text-wrap-balance">
        {title}
      </div>
      <div className="text-[21px] leading-relaxed text-[var(--color-muted)] font-medium text-pretty">
        {description}
      </div>
    </div>
  );
}

function CheckLine({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="flex gap-6 group">
      <div className="mt-1 h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-brand-700 shrink-0 group-hover:bg-brand-700 group-hover:text-white transition-colors duration-300">
        <Check className="h-5 w-5 stroke-[3]" />
      </div>
      <div>
        <div className="text-[24px] font-bold text-[var(--color-heading)] font-heading leading-tight">
          {title}
        </div>
        <div className="mt-3 text-[20px] leading-[var(--line)] text-[var(--color-muted)] font-medium">
          {description}
        </div>
      </div>
    </div>
  );
}

function StickyPurchaseBar({ onCta }: { onCta: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-900/5 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-2xl">
      <div className="container px-4 py-3">
        <div className="mx-auto max-w-[600px] flex flex-col gap-2">
          <button
            type="button"
            onClick={onCta}
            className="w-full flex items-center justify-center rounded-xl bg-brand-700 py-4 text-[18px] sm:text-[20px] font-black tracking-widest text-white shadow-btn hover:bg-brand-700/90 transition-all active:translate-y-1 active:shadow-none border border-transparent uppercase shrink-0 font-heading"
          >
            GET YOUR BOOK NOW →
          </button>
          <div className="flex items-center justify-between px-1 text-[10px] sm:text-[12px] font-black uppercase tracking-widest">
            <div className="flex items-center gap-1.5 text-gray-700">
              <span className="text-[14px]">🎉</span>
              <span>61% OFF + 3 FREE GIFTS</span>
            </div>
            <div className="text-[#8B4513]">VERIFIED LOWEST PRICE EVER</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StockLevels() {
  // Get the previous and current month
  const now = new Date();
  const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1);
  const currentMonth = new Date(now.getFullYear(), now.getMonth());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const previousMonthName = monthNames[previousMonth.getMonth()];
  const currentMonthName = monthNames[currentMonth.getMonth()];

  // Fixed data: previous month has 4750 sold
  const previousMonthSold = 4750;
  const currentMonthTotal = 4750;

  // Calculate current month progress: 18% on day 1, incrementing daily to 87% by end of month
  const currentDay = now.getDate();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const startProgress = 18;
  const endProgress = 87;
  const progressPercentage =
    startProgress +
    ((currentDay - 1) / (daysInMonth - 1)) * (endProgress - startProgress);

  // Calculate approximate number sold based on percentage
  const currentMonthSold = Math.round(
    (progressPercentage / 100) * currentMonthTotal,
  );

  return (
    <div className="space-y-4">
      {/* Previous Month - Grayed Out */}
      <div className="p-4 sm:p-5 rounded-lg bg-gray-100 border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <div className="text-[16px] sm:text-[18px] font-black text-gray-500 uppercase tracking-widest">
            {previousMonthName}
          </div>
          <div className="text-[14px] sm:text-[16px] text-gray-600 font-semibold">
            Sold Out ({previousMonthSold.toLocaleString()} Handbooks Sold)
          </div>
        </div>
      </div>

      {/* Current Month - Progress Bar */}
      <div className="p-4 sm:p-5 rounded-lg bg-white border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
          <div className="text-[16px] sm:text-[18px] font-black text-gray-900 uppercase tracking-widest">
            {currentMonthName}
          </div>
          <div className="text-[14px] sm:text-[16px] text-gray-700 font-semibold">
            {Math.round(progressPercentage)}% Sold (
            {currentMonthSold.toLocaleString()} of{" "}
            {currentMonthTotal.toLocaleString()})
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-300 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function BadgeStrip() {
  const badges = [
    { icon: <Ruler className="h-6 w-6" />, label: "Precise Dosages" },
    { icon: <BadgeCheck className="h-6 w-6" />, label: "Proven Methods" },
    { icon: <ShieldCheck className="h-6 w-6" />, label: "Safety Flagged" },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      label: "Clinically Developed",
    },
    { icon: <Flame className="h-6 w-6" />, label: "Potency Preserved" },
  ];

  return (
    <section className="badge-strip">
      <div className="container px-4 sm:px-[var(--container-pad)]">
        <div className="flex flex-wrap items-center justify-center gap-[var(--badge-strip-gap)]">
          {badges.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="h-[var(--badge-icon-size)] w-[var(--badge-icon-size)] shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-brand-700 shadow-inner">
                {item.icon}
              </div>
              <div className="text-[var(--badge-text-size)] font-[var(--badge-text-weight)] leading-tight uppercase tracking-[var(--badge-letter-spacing)] text-[var(--badge-text-color)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
  const [bundleSubmitted, setBundleSubmitted] = useState(false);
  const [bundleEmail, setBundleEmail] = useState("");
  const [bundleFirstName, setBundleFirstName] = useState("");
  const [bundleLastName, setBundleLastName] = useState("");
  const checkoutUrl = "https://buy.stripe.com/dRm6ozdtHc5h9v9aYnbAs00";

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the hero section (about 500px)
      setShowStickyBar(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffer = useCallback(() => {
    document.getElementById("offer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleBundleModalChange = useCallback((open: boolean) => {
    setIsBundleModalOpen(open);
    if (!open) {
      setBundleSubmitted(false);
      setBundleEmail("");
      setBundleFirstName("");
      setBundleLastName("");
    }
  }, []);

  const handleBundleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setBundleSubmitted(true);
    },
    [],
  );

  const handleOfferCtaClick = useCallback(() => {
    scrollToOffer();
  }, [scrollToOffer]);

  const handleStripeCheckoutClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      try {
        trackInitiateCheckout({ value: 49.0, currency: "USD", num_items: 1 });
      } catch {
        // Ignore tracking errors to ensure navigation still happens.
      }
      window.setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 150);
    },
    [checkoutUrl],
  );

  const faqs = useMemo(
    () => [
      {
        q: 'What makes "The Honest Herbalist Handbook" different from other herbal books?',
        a: "Most herbal books are organized by plant and read like encyclopedias. This one is organized by symptom. You look up what's wrong and get a remedy with measurements, safety flags, and when-to-stop signals — all on one page. No flipping around. No guessing.",
      },
      {
        q: "Who is Dr. Elara Vance?",
        a: "Dr. Vance is a clinical herbalist with 25 years of patient care in Vermont. She's created and tested herbal remedies in her own clinic. This handbook is the result of that hands-on experience.",
      },
      {
        q: "Do I need special equipment?",
        a: "No. If you have a stove, a pot, and measuring spoons, you're set. No fancy gadgets.",
      },
      {
        q: "Will I be able to find the herbs easily?",
        a: "Yes. Most remedies use kitchen staples: ginger, chamomile, honey, garlic, peppermint, thyme. The Starter Apothecary bonus helps you source anything you don't already have.",
      },
      {
        q: "Is this safe for kids? Pregnant women? Elderly family members?",
        a: "That's why the Safety Flags exist. Every entry shows who should skip the remedy, who needs adjusted amounts, and when to check with a doctor first.",
      },
      {
        q: "What if I'm on medications?",
        a: "The handbook includes medication clash alerts. Plus you get a bonus quick-reference for common herb-drug interactions. Always verify with your pharmacist before adding something new.",
      },
      {
        q: "How quickly will I see results?",
        a: "It depends. Some remedies — like ginger for digestion or chamomile for sleep — work within hours. Others support longer-term wellness. Each entry tells you what to expect.",
      },
      {
        q: "Is this for beginners?",
        a: "Yes. If you can follow a recipe, you can use this handbook. Every remedy has step-by-step instructions with exact measurements.",
      },
      {
        q: "What if I already know some herbalism?",
        a: "You'll appreciate the precision. This fills in the gaps other resources skip: exact amounts, timing, safety flags, and when-to-stop signals. Even experienced herbalists say it's the most usable guide they own.",
      },
      {
        q: "Is this a physical book or digital?",
        a: "Both! You'll receive your three digital bonuses instantly so you can start using them right away. Your printed book will ship out separately. This way, you have immediate access to the bonuses while your beautifully printed copy is on its way to you. The bonuses are also designed to print — including a big-font version — so you can print and keep copies in a kitchen binder.",
      },
      {
        q: "Can I use these alongside regular medical treatment?",
        a: "Yes — but tell your doctor what you're using. This handbook works alongside your doctor's care, not instead of it. The safety flags help you ask better questions.",
      },
      {
        q: "What health concerns does it cover?",
        a: "80+ common concerns: digestion, sleep, respiratory, skin, stress, minor aches, immune support. It's for situations where you want a safe first step before deciding if you need professional care.",
      },
      {
        q: "Is this safe for people over 40, 50, or 60?",
        a: "Yes — especially for this age group. The safety flags call out concerns for older users, medication clashes, and conditions that become more common with age.",
      },
      {
        q: "Can I gift this?",
        a: "Yes. Many customers buy copies for adult children, aging parents, or friends who want natural wellness guidance without the confusion.",
      },
      {
        q: "What if it's not for me?",
        a: "You get your money back. Full refund within 60 days, no questions. The only way you lose is if you don't try it.",
      },
      {
        q: "Is this just a recipe book?",
        a: "No. You get precise remedies — plus the why: which herbs to use, how to prepare them, who should avoid them, what medications they clash with, and when to stop. It's a decision-making tool.",
      },
    ],
    [],
  );

  return (
    <>
      <main className="pb-24">
        {/* Hero */}
        <section className="bg-white overflow-hidden pt-12 pb-20 lg:pt-40 lg:pb-32 relative min-h-[var(--hero-min-height)]">
          <div className="container px-4 sm:px-[var(--container-pad)] relative z-10">
            <div className="grid gap-8 lg:gap-20 lg:grid-cols-2 lg:items-center">
              {/* Left Column: Product Image (Top on mobile) */}
              <div className="order-1 lg:order-1 flex justify-center lg:justify-start mb-0 lg:mb-0">
                <div className="relative w-full max-w-[480px]">
                  {/* Layered images */}
                  <div className="relative z-20 shadow-2xl rounded-3xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F6198ad51e9874509a2bf1293abe883a0?format=webp&width=800&height=1200"
                      alt="The Honest Herbalist Handbook"
                      className="aspect-[2/3] w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Content (Bottom on mobile) */}
              <div className="order-2 lg:order-2 flex flex-col">
                <div className="flex flex-col gap-2 text-[16px] font-black text-black uppercase tracking-[0.2em] mb-4">
                  <span className="text-brand-amber text-[20px]">★★★★★</span>
                  <span>TRUSTED BY 12,000+ SELF-RELIANT FAMILIES</span>
                </div>

                <h1 className="text-[38px] sm:text-[var(--hero-title-size)] font-black tracking-tight font-heading text-[var(--color-heading)] leading-[var(--hero-title-line)] mb-8 max-w-[var(--hero-title-max)]">
                  "I Gave My Mother the Wrong Dose. She Ended Up in the ER."
                </h1>

                <p className="text-[20px] sm:text-[var(--hero-subtitle-size)] leading-[var(--hero-subtitle-line)] text-[var(--color-text)] mb-12 font-[var(--hero-subtitle-weight)] max-w-[var(--hero-subtitle-max)]">
                  One dosing mistake can turn a kitchen remedy into a nightmare.
                  <span className="text-black font-bold">
                    {" "}
                    This handbook finally tells you how much, how often, and
                    when to stop.
                  </span>
                </p>

                <div className="mb-6">
                  <PrimaryCTA
                    onClick={scrollToOffer}
                    className="w-full sm:w-auto"
                  >
                    YES! I WANT THE REAL DOSAGES →
                  </PrimaryCTA>
                  <div className="mt-6 flex items-center gap-3 text-[12px] text-brand-900/50 font-black uppercase tracking-widest">
                    <ShieldCheck className="h-7 w-7 text-brand-blue" />
                    VERIFIED CLINICAL MEASUREMENTS & SAFETY FLAGS INCLUDED
                  </div>
                </div>

                <div className="mt-8 lg:mt-10 pt-8 lg:pt-10 border-t border-border space-y-5">
                  {/* Scarcity Container */}
                  <div className="rounded-2xl bg-red-50 p-6 sm:p-8 border border-red-100">
                    {/* Alert Message */}
                    <div className="flex gap-4 items-start mb-6 sm:mb-8">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                          <AlertTriangle className="h-6 w-6 text-white stroke-[2.5]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[16px] sm:text-[18px] font-bold text-gray-900">
                          We are selling out more than expected.{" "}
                          <span className="text-red-600">
                            Order now before we run out again.
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Stock Levels */}
                    <StockLevels />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="marquee-container">
          <div className="marquee-content">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-4 text-[var(--marquee-text)] font-[var(--marquee-font-weight)] text-[var(--marquee-font-size)] uppercase tracking-[var(--marquee-letter-spacing)]"
              >
                <span>Precise Dosages</span>
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                <span>Proven Methods</span>
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                <span>Safety Flagged</span>
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                <span>Clinically Developed</span>
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
            ))}
          </div>
        </section>

        {/* Guarantee */}
        <section className="bg-white border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-14">
            <div className="mx-auto max-w-6xl rounded-2xl bg-brand-50 border border-brand-200 p-8 sm:p-12">
              <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-center">
                <div className="flex justify-center">
                  <div className="w-56 sm:w-80 h-96 sm:h-[600px] rounded-2xl bg-white border border-border shadow-soft overflow-hidden shrink-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F417ec50d22964e9eae7a448679104d45?format=webp&width=800&height=1200"
                      alt="Dr. Elara Vance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-[var(--heading-size)] font-bold tracking-tight font-heading leading-[var(--heading-line)] text-[var(--color-heading)]">
                    Meet Dr. Elara Vance{" "}
                    <span className="font-serif italic font-normal text-[0.8em] block sm:inline sm:ml-2">
                      Clinical Herbalist — 25 Years in Practice
                    </span>
                  </h2>
                  <div className="mt-8 space-y-6 text-[18px] leading-relaxed text-[var(--color-muted)]">
                    <p>
                      After two decades in her Vermont clinic, Dr. Vance noticed
                      a pattern. Patients weren't failing with herbs — they were
                      failing with <span className="italic">guidance</span>.
                    </p>
                    <p>
                      The same story, over and over: Someone tried a remedy they
                      found online. It didn't work — or worse, it clashed with a
                      medication no one warned them about. They felt stupid.
                      They gave up. And they stopped trusting natural options
                      entirely.
                    </p>
                    <p>
                      She called it{" "}
                      <strong className="text-[var(--color-heading)]">
                        The Trust Gap Spiral
                      </strong>
                      . Conflicting advice leads to blind experimentation. Blind
                      experimentation leads to harm or disappointment. And
                      careful people — the ones who{" "}
                      <span className="italic">should</span> be using these
                      tools — walk away empty-handed.
                    </p>
                    <p>
                      That pattern is why she built{" "}
                      <strong className="text-[var(--color-heading)]">
                        The 3-Layer Safety-First System™
                      </strong>{" "}
                      into every entry of this handbook — and why safety flags
                      and "when to stop" signals aren't footnotes. They're the
                      foundation.
                    </p>
                    <div className="pt-4">
                      <p className="font-medium text-[20px] text-[var(--color-heading)] italic">
                        "The danger was never herbs. It was hype without
                        guardrails. This handbook is 25 years of learning what
                        to warn people about{" "}
                        <span className="italic">before</span> they make a
                        mistake."
                      </p>
                      <p className="mt-4 font-bold text-[var(--color-heading)]">
                        — Dr. Elara Vance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock section */}
        <section className="bg-[#fcfdfc] py-[var(--section-pad-y)] lg:py-40 border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)]">
            <SectionTitle
              title="What You'll Unlock Inside The Honest Herbalist Handbook"
              subtitle="The clinical framework that turns vague advice into medical-grade results."
            />

            <div className="mt-24 grid gap-24 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative z-20 shadow-2xl rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F520527760e58430fb66c64a8ead96de8?format=webp&width=800&height=1200"
                    alt="Ginger Tea clinical guidance page"
                    className="aspect-[2/3] w-full"
                  />
                </div>
              </div>

              <div className="space-y-12">
                <CheckLine
                  title="The 3-Layer Safety-First System™"
                  description={
                    <div className="space-y-3">
                      <div>
                        Every entry follows the same clinical framework:
                      </div>
                      <div className="flex items-center gap-3 text-brand-900/60 font-medium">
                        <span className="h-2 w-2 rounded-full bg-brand-700" />
                        Layer 1: Safe first steps with exact amounts.
                      </div>
                      <div className="flex items-center gap-3 text-brand-900/60 font-medium">
                        <span className="h-2 w-2 rounded-full bg-brand-700" />
                        Layer 2: Safety flags before you start.
                      </div>
                      <div className="flex items-center gap-3 text-brand-900/60 font-medium">
                        <span className="h-2 w-2 rounded-full bg-brand-700" />
                        Layer 3: When to stop and call the doctor.
                      </div>
                    </div>
                  }
                />

                <CheckLine
                  title="Precise Measurements That Work"
                  description={
                    <div className="space-y-3">
                      <div>
                        "Add some ginger" is not a remedy.{" "}
                        <strong className="text-brand-900">
                          1-2 teaspoons fresh grated ginger, steeped at 180°F
                          for 10 minutes
                        </strong>{" "}
                        — that's a remedy.
                      </div>
                    </div>
                  }
                />

                <CheckLine
                  title="Safety Flags Before You Make a Mistake"
                  description="Before you use anything, you'll see medication clash alerts, age restrictions (kids/elderly), and pregnancy warnings. It's the part that matters most."
                />

                <div className="pt-6 flex justify-center lg:justify-start">
                  <PrimaryCTA onClick={scrollToOffer}>
                    GET THE HANDBOOK TODAY →
                  </PrimaryCTA>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredient Science Section */}
        <section className="bg-brand-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
          </div>
          <div className="container px-4 sm:px-[var(--container-pad)] py-[var(--section-pad-y)] lg:py-40">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-block bg-brand-700 text-white font-bold text-[12px] tracking-[0.3em] px-4 py-1.5 uppercase rounded-full mb-8 shadow-lg">
                  clinical precision
                </div>
                <h2 className="text-4xl sm:text-[var(--heading-size)] font-bold tracking-tight font-heading leading-[var(--heading-line)] mb-10 text-white">
                  The Science <br />
                  <span className="text-brand-amber">Behind the Potency.</span>
                </h2>
                <p className="text-[22px] text-white/70 leading-[var(--line)] mb-12 max-w-lg">
                  Most people see ingredients. We see compounds. The Honest
                  Herbalist Handbook reveals the exact prep rules that activate
                  the healing power other guides accidentally destroy.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      t: "Allicin Activation",
                      d: "Chop garlic. Wait 15 mins. That's the chemical switch.",
                    },
                    {
                      t: "Gingerols vs Shogaols",
                      d: "Boiling destroys one, activates the other. The handbook tells you which you need.",
                    },
                    {
                      t: "Citric Acid Synergy",
                      d: "How lemon acts as a delivery vehicle for heavy-hitting herbs.",
                    },
                  ].map((item) => (
                    <div key={item.t} className="flex gap-5 group">
                      <div className="mt-1 h-8 w-8 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-brand-amber group-hover:bg-brand-amber group-hover:text-brand-900 transition-all duration-300 shadow-inner">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white uppercase tracking-widest text-[20px] mb-2">
                          {item.t}
                        </div>
                        <div className="text-white/70 text-[20px] leading-[var(--line)]">
                          {item.d}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F2ab4bb00733948b08d5cda99c0ab3702?format=webp&width=800&height=1200"
                    alt="The Science Behind the Potency"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem section */}
        <section className="bg-[#fcfdfc] border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-20 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative z-20 shadow-2xl rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fa0de9b8012784e25a4df15e8f68a4e1a?format=webp&width=800&height=1200"
                    alt="Peppermint Tea clinical guidance page"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <SectionTitle
                  title="Still Guessing With Your Family's Health... While the Stakes Keep Getting Higher?"
                  subtitle="You're not being paranoid. You're being smart. Because most herbal guides skip the part that matters: the measurements."
                />

                <div className="mt-10 space-y-6">
                  <CheckLine
                    title="Too Little Does Nothing"
                    description="You try an herb. You guess on the amount. Nothing happens. You decide 'natural doesn't work for me.' But the herb wasn't the problem. The dose was."
                  />
                  <CheckLine
                    title="Too Much Can Cause Real Harm"
                    description="Even gentle herbs have limits. Licorice root can spike blood pressure. St. John's Wort clashes with heart meds and antidepressants. Dosage isn't optional."
                  />
                  <CheckLine
                    title="The Wrong Herb for the Wrong Person"
                    description="Kids need different rules. So do pregnant women, nursing mothers, and the elderly. A remedy that's safe for you might be dangerous for your mother."
                  />
                </div>

                <div className="mt-8 p-8 rounded-lg border-l-8 border-brand-700 bg-white shadow-sm">
                  <div className="text-[22px] font-bold text-brand-700 italic">
                    "The problem isn't herbs. The problem is vague advice
                    pretending to be guidance."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution section */}
        <section className="bg-white border-t border-slate-100">
          <div className="container px-4 sm:px-6 py-20 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <SectionTitle
                  title="The Safety-First Handbook That Finally Tells You the Truth"
                  subtitle="Tired of vague advice? This isn't an encyclopedia. It's a field manual for when someone's coughing at midnight and you need to know fast."
                />

                <div className="mt-10 space-y-6">
                  <CheckLine
                    title="The Credibility Test Most Guides Fail"
                    description="If it doesn't include amounts, it can't tell you anything useful. Would you trust a medication that said 'take a couple pills whenever'?"
                  />
                  <CheckLine
                    title="No Gadgets. No Guessing."
                    description="These step-by-step remedies use what you already have: ginger, chamomile, honey, garlic, peppermint. Kitchen staples. Nothing exotic."
                  />
                  <CheckLine
                    title="Symptom-Indexed"
                    description="Don't hunt through chapters organized by plant name. Flip to what's wrong and get your answer on one page."
                  />

                  <div className="pt-6 flex justify-center lg:justify-start">
                    <PrimaryCTA onClick={scrollToOffer}>
                      GET THE HANDBOOK TODAY →
                    </PrimaryCTA>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative z-20 shadow-2xl rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fd3cbbb906f534c1ea310b43430d81410?format=webp&width=800&height=1200"
                    alt="The Honest Herbalist Handbook Quick Find Page"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="bg-[#fcfdfc] border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-20 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative z-20 shadow-2xl rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F6198ad51e9874509a2bf1293abe883a0?format=webp&width=800&height=1200"
                    alt="The Honest Herbalist Handbook Cover"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight font-heading text-[var(--color-heading)] leading-tight mb-8">
                  Why Self-Reliant Families Trust This Handbook Over Googling,
                  Guessing, or Other Books
                </h2>

                <div className="mt-6 space-y-6">
                  <CheckLine
                    title="Everything's Organized by Symptom"
                    description="No hunting through plant history. Flip to digestion, sleep, respiratory, skin — whatever you need. Get your answer in 30 seconds."
                  />
                  <CheckLine
                    title="Exact Amounts. Exact Timing. Every Entry."
                    description={
                      'No "add a little" or "drink some tea." Every remedy includes teaspoons, grams, drops, steep times, temperatures, and frequencies. This is what makes the difference between "it didn\'t work" and real relief.'
                    }
                  />
                  <CheckLine
                    title="Zero Research Rabbit Holes"
                    description="Stop bouncing between blog posts that don't agree. Stop saving Instagram posts you'll never find. Stop Googling at 2 AM and getting 47 different answers. This is everything in one place — checked by someone with 25 years of clinical experience."
                  />
                  <CheckLine
                    title="Safe, Not Naive"
                    description="Every remedy includes safety flags and interaction warnings. This isn't wishful thinking — it's the same careful approach Dr. Vance uses with her own patients. If it's not safe for someone, you'll know before you start."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special section */}
        <section className="bg-white border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-14">
            <SectionTitle
              title="What Makes The Honest Herbalist Handbook Different?"
              subtitle="A safety-first guide created by a clinical herbalist — not scraped from the internet. Built for families who refuse to guess with their loved ones' health."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Symptom-Indexed",
                  desc: "Organized by what's wrong, not by plant name. Find what you need in seconds.",
                  icon: <Search className="h-5 w-5" />,
                },
                {
                  title: "Precise Measurements",
                  desc: "Teaspoons. Grams. Drops. Steep times. Temperatures. Real numbers on every entry.",
                  icon: <Ruler className="h-5 w-5" />,
                },
                {
                  title: "No More Guessing",
                  desc: "One organized reference replaces 50 browser tabs and the 3 AM Google spiral.",
                  icon: <ShieldCheck className="h-5 w-5" />,
                },
                {
                  title: "Safety-First",
                  desc: "Safety flags, interaction warnings, and when-to-stop signals on every page.",
                  icon: <AlertTriangle className="h-5 w-5" />,
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl bg-white border border-border p-8 shadow-soft"
                >
                  <div className="h-14 w-14 rounded-full bg-slate-50 flex items-center justify-center text-brand-700 mb-6">
                    {c.icon}
                  </div>
                  <div className="mt-3 text-[22px] font-extrabold text-[var(--color-heading)] leading-tight">
                    {c.title}
                  </div>
                  <div className="mt-4 text-[20px] leading-[var(--line)] text-[var(--color-muted)]">
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning signs section (two columns) */}
        <section className="bg-[#fcfdfc] border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-20 lg:py-32">
            <SectionTitle
              title="What Happens When You Keep Guessing?"
              subtitle="You know the cycle. Something's off. You search online. You find 47 different answers. None agree on amounts. You try something. Maybe it works. Maybe it doesn't. Maybe you give up. That's the Trust Gap Spiral — and it keeps careful people like you stuck."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-border bg-red-50">
                <div className="bg-red-600 text-white px-6 py-4 text-[20px] font-extrabold tracking-wide flex items-center gap-2">
                  ⚠️ The Real Risks of Vague Advice
                </div>
                <div className="p-6 space-y-6">
                  {[
                    {
                      t: "You waste time and hope.",
                      d: "You try a remedy with the wrong amount, get no result, and decide herbs don't work.",
                    },
                    {
                      t: "You accidentally cause harm.",
                      d: "Too much licorice root. St. John's Wort with the wrong medication. These aren't rare mistakes.",
                    },
                    {
                      t: "You lose confidence in yourself.",
                      d: '"I tried the natural route and it made things worse." That shame keeps you quiet.',
                    },
                    {
                      t: "You give up entirely.",
                      d: "The herbs weren't the problem. The information was.",
                    },
                    {
                      t: "You put your family at risk.",
                      d: "A remedy safe for you might be dangerous for your child or elderly parent on blood thinners.",
                    },
                  ].map((i) => (
                    <div key={i.t} className="rounded-lg bg-white/70 p-6">
                      <div className="text-[22px] font-extrabold text-red-900">
                        {i.t}
                      </div>
                      <div className="mt-2 text-[20px] leading-[var(--line)] text-[var(--color-muted)]">
                        {i.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-brand-50">
                <div className="bg-brand-700 text-white px-6 py-4 text-[20px] font-extrabold tracking-wide flex items-center gap-2">
                  ✓ What Changes With Real Guidance
                </div>
                <div className="p-6 space-y-6">
                  {[
                    {
                      t: "You act with confidence.",
                      d: "When you know the exact amount and the safety flags, you're not guessing. You're following a tested plan.",
                    },
                    {
                      t: "You know when to stop.",
                      d: "Clear signals tell you when symptoms have crossed the line — so you get help at the right time.",
                    },
                    {
                      t: "You protect the vulnerable.",
                      d: "Safety flags for kids, pregnancy, nursing, elderly, and medication clashes mean no accidental mistakes.",
                    },
                    {
                      t: "You build real trust in natural options.",
                      d: "When remedies work because you used them right, you stop second-guessing.",
                    },
                    {
                      t: "You become the person others call.",
                      d: "The calm one. The prepared one. The one who knows what to do at 2 AM.",
                    },
                  ].map((i) => (
                    <div key={i.t} className="rounded-lg bg-white/70 p-6">
                      <div className="text-[22px] font-extrabold text-brand-700">
                        {i.t}
                      </div>
                      <div className="mt-2 text-[20px] leading-[var(--line)] text-[var(--color-muted)]">
                        {i.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="text-[20px] font-extrabold uppercase tracking-widest text-brand-700">
                Good News: The guessing ends here.
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 px-8 py-4 text-[18px] font-semibold text-foreground/80 inline-flex items-center max-w-3xl border border-slate-100">
                The Honest Herbalist Handbook gives you precise measurements,
                safety flags, and when-to-stop signals that turn uncertainty
                into confidence — starting with your next remedy.
              </div>

              <div className="mt-6">
                <PrimaryCTA onClick={handleOfferCtaClick}>
                  GET THE HONEST HERBALIST HANDBOOK TODAY →
                </PrimaryCTA>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="bg-white border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-14">
            <SectionTitle
              title="Kitchen Ingredients. Clinical-Grade Guidance."
              subtitle={
                'The Honest Herbalist Handbook focuses on ingredients you likely already have — with the exact methods that turn "I tried it and nothing happened" into "Oh, that\'s how you do it."'
              }
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Honey",
                  desc: "Real healing power — if you know the age limits and temperature rules most guides skip. Never heat above 95°F. Never give to babies under 12 months.",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F490fa48c38bc4cceb6ff69d80107610a?format=webp&width=800&height=1200",
                },
                {
                  title: "Garlic",
                  desc: "The 10-15 minute waiting period that activates garlic's healing compound. Chop it, then wait.",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fc7b0691cd2ac40cc90c2cec6f0840216?format=webp&width=800&height=1200",
                },
                {
                  title: "Ginger",
                  desc: "The temperature range (below boiling) that preserves what matters. Most people destroy the active compounds by boiling.",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F9f68cfee6e76467fad2961f9ccf68d4f?format=webp&width=800&height=1200",
                },
                {
                  title: "Chamomile",
                  desc: "The 30-minute timing window for sleep — drink too early and it wears off, too late and you're up all night. Steep time and amount matter too.",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F1f8167182d7a48cb97b292cc61823acf?format=webp&width=800&height=1200",
                },
                {
                  title: "Peppermint",
                  desc: "Great for digestion — but with hidden cautions for reflux, hiatal hernia, and certain medications. The safety flag could save you trouble.",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fe000e3a2bb7d4d889ba5f47b389059ac?format=webp&width=800&height=1200",
                },
                {
                  title: "Lemon",
                  desc: "Simple remedies for digestion and immune support — but only when combined correctly. Temperature and timing matter.",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F7808d2b4781e484fb199fe927513d13e?format=webp&width=800&height=1200",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="rounded-xl bg-white border border-border overflow-hidden shadow-soft flex flex-col group"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={i.image}
                      alt={i.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-[20px] sm:text-[22px] font-extrabold text-[var(--color-heading)] uppercase tracking-wider">
                      {i.title}
                    </div>
                    <div className="mt-4 text-[18px] sm:text-[20px] leading-[var(--line)] text-[var(--color-muted)]">
                      {i.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-brand-700" />
                🔒 60-Day Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-700" />
                Instant Digital Access
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#fcfdfc] py-[var(--reviews-pad-y)] border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)]">
            <SectionTitle
              title="Real People. Real Relief."
              subtitle="Join 12,000+ families who've stopped guessing and started using clinical-grade herbal guidance."
            />

            <div className="mt-16 relative px-4 sm:px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {[
                    {
                      quote:
                        '"Finally — a book that tells me HOW MUCH."\n"I\'ve bought three herbal books over the years. Pretty pictures, nice stories, zero practical use. This one has measurements. Steep times. Warnings. It\'s the only one that stays in my kitchen instead of on a shelf."',
                      name: "Rachel M., 54 — Texas",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F81d96098694d49058ebd27e26c1530d2?format=webp&width=800&height=1200",
                    },
                    {
                      quote:
                        '"I gave my elderly mom the wrong herb. Never again."\n"I didn\'t know St. John\'s Wort could clash with her heart medication. Nobody told me. I found out the hard way. This handbook flags that on every single page. I wish I\'d had it sooner."',
                      name: "Denise K., 61 — Ohio",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fa1a8c7dcc80f4b2b91779de93bc5604a?format=webp&width=800&height=1200",
                    },
                    {
                      quote:
                        "\"This is what I grab at 2 AM.\"\n\"When my son's coughing and I'm half-asleep, I'm not Googling. I'm not scrolling through blogs. I flip to 'respiratory' and get a clear answer in 30 seconds. That's worth way more than $49.\"",
                      name: "Amanda T., 47 — Montana",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fd54a6730f12144a6bc27eddd161f38ef?format=webp&width=800&height=1200",
                    },
                    {
                      quote:
                        '"The precision is what sold me."\n"I always worried about safety flags for my grandkids. This handbook makes it so clear. No more guessing if something is safe for a 6-year-old or an 80-year-old."',
                      name: "Susan L., 66 — Oregon",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Feb6aabdb1f0a41d4b1608fb83089395c?format=webp&width=800&height=1200",
                    },
                  ].map((t, idx) => (
                    <CarouselItem
                      key={idx}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full rounded-[var(--reviews-card-radius)] border border-[#E0E0E0] bg-[var(--reviews-card-bg)] p-0 overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col">
                        {t.image && (
                          <div className="aspect-[3/4] w-full overflow-hidden border-b border-border">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex items-center gap-1 text-brand-amber mb-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <div className="text-[18px] leading-relaxed text-[var(--reviews-text-color)] italic mb-8 whitespace-pre-line flex-1">
                            {t.quote}
                          </div>
                          <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
                            <div className="h-10 w-10 rounded-full bg-white border border-border flex items-center justify-center text-brand-700 font-bold text-xs shadow-sm overflow-hidden">
                              {t.image ? (
                                <img
                                  src={t.image}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                t.name.charAt(0)
                              )}
                            </div>
                            <div className="text-[16px] font-bold text-brand-900 uppercase tracking-tight">
                              {t.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-4 mt-12">
                  <CarouselPrevious className="static translate-y-0 h-[var(--reviews-nav-size)] w-[var(--reviews-nav-size)] bg-[var(--reviews-nav-bg)] border-[var(--reviews-nav-border)] text-[var(--reviews-nav-color)] shadow-[var(--reviews-nav-shadow)]" />
                  <CarouselNext className="static translate-y-0 h-[var(--reviews-nav-size)] w-[var(--reviews-nav-size)] bg-[var(--reviews-nav-bg)] border-[var(--reviews-nav-border)] text-[var(--reviews-nav-color)] shadow-[var(--reviews-nav-shadow)]" />
                </div>
              </Carousel>
            </div>

            <div className="mt-16 text-center">
              <PrimaryCTA onClick={handleOfferCtaClick} className="px-12">
                GET THE HONEST HERBALIST HANDBOOK TODAY →
              </PrimaryCTA>
            </div>
          </div>
        </section>

        {/* Offer */}
        <section
          id="offer"
          className="bg-white border-t border-slate-100 relative overflow-hidden"
        >
          <div className="container px-4 sm:px-[var(--container-pad)] py-20 lg:py-32">
            <SectionTitle
              title="Ready to Finally Stop Guessing With Your Loved Ones' Health?"
              subtitle="Secure your copy of the clinical reference that finally puts safety first."
            />

            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-[680px] rounded-2xl border-2 border-dashed border-brand-700 bg-white shadow-2xl overflow-hidden p-2">
                <div className="rounded-xl border border-border bg-white overflow-hidden">
                  <div className="bg-brand-700 px-6 py-4 text-center text-white">
                    <div className="text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1 text-white/80">
                      limited time offer
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                      SAVE 61% TODAY
                    </div>
                  </div>

                  <div className="p-6 sm:p-10 pb-6">
                    <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-start mb-10">
                      <div className="relative transform -rotate-2">
                        <div className="relative z-20 shadow-xl rounded-2xl overflow-hidden">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2Fb1922dfa8c004d0e83eebc23dec664a4?format=webp&width=800&height=1200"
                            alt="The Honest Herbalist Handbook Bundle"
                            className="aspect-[2/3] w-full"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-brand-amber text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-30">
                          MOST POPULAR
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-[22px] font-bold font-heading text-[var(--color-heading)] mb-2">
                          The Honest Herbalist Handbook Bundle
                        </div>
                        <div className="text-[18px] text-[var(--color-muted)] leading-[var(--line)] mb-4">
                          Get access to the clinical reference guide plus
                          digital access to all 3 life-saving bonus resources.
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-3xl sm:text-[40px] font-extrabold text-[var(--color-heading)]">
                            $49
                          </div>
                          <div className="flex flex-col">
                            <div className="text-[16px] text-[var(--color-muted)] line-through">
                              $127.00
                            </div>
                            <div className="text-[14px] font-bold text-brand-700 uppercase tracking-wide">
                              Save $78.00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="text-[18px] font-bold text-[var(--color-heading)] uppercase tracking-wider border-b border-border pb-2">
                        What's Included in the "Safety-First" Stack:
                      </div>

                      {[
                        {
                          title: "The Honest Herbalist Handbook",
                          value: "$127",
                          desc: "80+ symptom-indexed entries with precise dosages & safety flags.",
                        },
                        {
                          title: "BONUS #1: The 2 AM Decision Tree",
                          value: "$29",
                          desc: "One-page printable flowchart for emergency triage situations.",
                        },
                        {
                          title: "BONUS #2: Medication Interaction Guide",
                          value: "$35",
                          desc: "Quick-reference for herb-drug clashes organized by med type.",
                        },
                        {
                          title: "BONUS #3: The Starter Apothecary Checklist",
                          value: "$19",
                          desc: "The 12 essential herbs to build your clinical kitchen pharmacy.",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex gap-4 items-start group"
                        >
                          <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-[18px] font-bold text-[var(--color-text)]">
                                {item.title}
                              </div>
                              <div className="text-[16px] font-medium text-[var(--color-muted)] italic">
                                {item.value} Value
                              </div>
                            </div>
                            <div className="text-[16px] text-[var(--color-muted)] mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 space-y-6">
                      <a
                        href={checkoutUrl}
                        onClick={handleStripeCheckoutClick}
                        className="cta-primary w-full"
                      >
                        GET THE HONEST HERBALIST HANDBOOK TODAY →
                      </a>

                      <div className="flex flex-col items-center gap-6">
                        <div className="text-[16px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                          Secure checkout
                        </div>
                        <div className="max-w-[500px] w-full px-4 opacity-90 hover:opacity-100 transition-opacity">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F8651bc8558944e8fb633172962914acb?format=webp&width=800&height=1200"
                            alt="Secure Payment Providers"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="text-[18px] text-muted-foreground italic">
                          60-day money back guarantee.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="bg-white border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-14">
            <div className="mx-auto max-w-5xl rounded-2xl bg-brand-50 border border-brand-200 p-8 sm:p-12">
              <div className="grid gap-10 md:grid-cols-[200px_1fr] md:items-center">
                <div className="flex justify-center">
                  <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-white border border-border shadow-soft overflow-hidden shrink-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fbedb2949a0a643deba81c521622c60b2%2F0cdb9787e25546e69ab5662ffa9c969e?format=webp&width=800&height=1200"
                      alt="60-Day Money-Back Guarantee Seal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-[var(--heading-size)] font-bold tracking-tight font-heading leading-[var(--heading-line)] text-[var(--color-heading)]">
                    60-Day Money-Back Guarantee — No Questions Asked
                  </h2>
                  <p className="mt-2 text-[18px] leading-[var(--line)] text-[var(--color-muted)]">
                    We believe in this handbook — and we believe you should try
                    it risk-free. Print it out. Put it in your kitchen. Use it
                    the next time someone in your family isn't feeling well. If
                    it doesn't become the first thing you reach for — if it
                    doesn't make you feel more confident and less reliant on
                    late-night Googling — just let us know within 60 days. We'll
                    refund every penny. No hoops. No hassle. Just guidance that
                    works — or your money back.
                  </p>
                  <p className="mt-4 text-[18px] leading-[var(--line)] text-[var(--color-muted)]">
                    "I've spent 25 years building trust with patients one person
                    at a time. If this handbook doesn't help you, I don't want
                    your money."
                    <br />— Dr. Elara Vance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-14">
            <SectionTitle title="Frequently Asked Questions" />

            <div className="mt-10 mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, idx) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${idx}`}
                    className="rounded-xl border border-slate-100 bg-[#fcfdfc] px-5"
                  >
                    <AccordionTrigger className="py-4 text-[18px] font-extrabold tracking-wide text-left hover:no-underline text-brand-700">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[18px] text-[var(--color-text)] whitespace-pre-line leading-[var(--line)]">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#fcfdfc] border-t border-slate-100">
          <div className="container px-4 sm:px-[var(--container-pad)] py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-[30px] font-extrabold tracking-tight text-[var(--color-heading)]">
                Lasting Confidence Starts Here — With Real Dosages
              </h2>
              <div className="mt-4 space-y-2 text-[18px] text-[var(--color-muted)]">
                <div>You don't need to "just wing it."</div>
                <div>
                  You don't need another Pinterest board with pretty pictures.
                </div>
                <div>
                  You don't need that knot in your stomach when you're not sure
                  about the amount.
                </div>
                <div>You need a reference you can trust.</div>
              </div>
              <p className="mt-6 text-[18px] leading-[var(--line)] text-[var(--color-muted)]">
                Join the families who've stopped guessing and started using
                precise, safety-first herbal guidance — from a clinical
                herbalist with 25 years of patient care.
              </p>

              <div className="mt-8">
                <div className="text-[24px] font-extrabold text-[var(--color-heading)]">
                  Ready to Stop Guessing?
                </div>
                <div className="mt-4">
                  <a
                    href={checkoutUrl}
                    onClick={handleStripeCheckoutClick}
                    className="cta-primary"
                  >
                    GET THE HONEST HERBALIST HANDBOOK TODAY →
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[18px] text-muted-foreground">
                  <div className="flex items-center gap-2">
                    🔒 60-Day Money-Back Guarantee
                  </div>
                </div>
              </div>

              <p className="mt-10 text-[12px] leading-relaxed text-muted-foreground">
                Disclaimer: This handbook is for educational purposes only. It
                is not intended to diagnose, treat, cure, or prevent any
                disease. Always consult a qualified healthcare provider before
                starting any new health regimen, especially if you are pregnant,
                nursing, taking medications, or have a medical condition.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={isBundleModalOpen} onOpenChange={handleBundleModalChange}>
        <DialogContent className="sm:max-w-[520px]">
          {bundleSubmitted ? (
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-heading text-[var(--color-heading)]">
                Thank you!
              </DialogTitle>
              <DialogDescription className="text-[15px] text-[var(--color-muted)]">
                We've received your interest and we will email you with
                instructions how to purchase.
              </DialogDescription>
            </DialogHeader>
          ) : (
            <>
              <DialogHeader className="text-center sm:text-left">
                <DialogTitle className="text-2xl font-heading text-[var(--color-heading)]">
                  Get the Honest Herbalist Handbook
                </DialogTitle>
                <DialogDescription className="text-[15px] text-[var(--color-muted)]">
                  Enter your details to receive purchase instructions.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleBundleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bundle-email">Email</Label>
                  <Input
                    id="bundle-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={bundleEmail}
                    onChange={(event) => setBundleEmail(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bundle-first-name">First name</Label>
                  <Input
                    id="bundle-first-name"
                    required
                    autoComplete="given-name"
                    value={bundleFirstName}
                    onChange={(event) => setBundleFirstName(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bundle-last-name">Last name</Label>
                  <Input
                    id="bundle-last-name"
                    required
                    autoComplete="family-name"
                    value={bundleLastName}
                    onChange={(event) => setBundleLastName(event.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      {showStickyBar && <StickyPurchaseBar onCta={handleOfferCtaClick} />}
    </>
  );
}
