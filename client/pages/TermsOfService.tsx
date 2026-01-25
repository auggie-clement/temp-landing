import { PolicyPageLayout } from "@/components/site/PolicyPageLayout";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <PolicyPageLayout
      title="Terms of Service"
      lastUpdated="Jan 2026"
      description={
        <>
          These Terms of Service (“Terms”) govern your use of The Honest Herbalist
          website and any purchases made through it. By accessing or using our
          website, you agree to these Terms.
        </>
      }
    >
      <h2>1) Eligibility</h2>
      <p>
        You may use the website only if you can form a legally binding contract
        in your jurisdiction. By placing an order, you represent that you are at
        least the age of majority where you live, or you have permission from a
        parent/guardian.
      </p>

      <h2>2) Educational information (not medical advice)</h2>
      <p>
        We may provide educational content related to herbs, wellness practices,
        or traditional uses.
      </p>
      <p>
        <strong>Important:</strong> Our content and products are not medical
        advice and are not intended to diagnose, treat, cure, or prevent any
        disease. Always consult a qualified healthcare professional regarding
        medical questions, pregnancy/nursing, allergies, or medication
        interactions.
      </p>

      <h2>3) Orders, pricing, and payments</h2>
      <ul>
        <li>Prices are shown in <strong>USD</strong> unless stated otherwise.</li>
        <li>Taxes and shipping are calculated at checkout where applicable.</li>
        <li>
          We reserve the right to correct pricing errors and cancel orders
          affected by an error.
        </li>
      </ul>
      <p>
        We may refuse or cancel an order if we suspect fraud, unauthorized
        activity, or other violations of these Terms.
      </p>

      <h2>4) Shipping and refunds</h2>
      <p>
        Shipping timelines and refund rules are described in our{" "}
        <Link to="/shipping-policy">Shipping Policy</Link> and{" "}
        <Link to="/refund-policy">Refund Policy</Link>, which are incorporated
        into these Terms.
      </p>

      <h2>5) Intellectual property</h2>
      <p>
        All website content (text, graphics, logos, photos, product names, and
        design) is owned by or licensed to The Honest Herbalist and is protected
        by intellectual property laws. You may not copy, reproduce, sell, or
        exploit our content without written permission.
      </p>

      <h2>6) Prohibited uses</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website for unlawful purposes</li>
        <li>Attempt to interfere with site security or functionality</li>
        <li>Scrape, harvest, or misuse customer data</li>
        <li>Misrepresent your identity or submit false information</li>
      </ul>

      <h2>7) Third-party services and links</h2>
      <p>
        Our website may link to third-party sites or use third-party services
        (payments, shipping, analytics). We are not responsible for third-party
        content or practices.
      </p>

      <h2>8) Disclaimer of warranties</h2>
      <p>
        The website and products are provided “as is” and “as available,” to the
        fullest extent allowed by law. We do not guarantee that the website will
        be uninterrupted or error-free.
      </p>

      <h2>9) Limitation of liability</h2>
      <p>
        To the fullest extent allowed by law, The Honest Herbalist will not be
        liable for indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits, arising from your use of the website or
        products.
      </p>
      <p>
        If liability cannot be excluded, our total liability will be limited to
        the amount you paid for the product(s) giving rise to the claim.
      </p>

      <h2>10) Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless The Honest Herbalist from
        claims, losses, liabilities, and expenses arising out of your violation
        of these Terms or misuse of the website.
      </p>

      <h2>11) Governing law</h2>
      <p>
        These Terms are governed by the laws of the <strong>State of Delaware, USA</strong>,
        without regard to conflict-of-law rules.
      </p>

      <h2>12) Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        website after changes means you accept the updated Terms.
      </p>

      <h2>13) Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:support@thehonestherbalist.com">
          support@thehonestherbalist.com
        </a>
        .
      </p>
    </PolicyPageLayout>
  );
}
