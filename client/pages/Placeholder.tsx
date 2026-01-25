import { Link } from "react-router-dom";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="container px-4 sm:px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-3 text-muted-foreground">
          This page is a placeholder. If you want it matched to the source page
          as well, tell me and I’ll recreate it 1:1.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white shadow-btn hover:bg-brand-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
