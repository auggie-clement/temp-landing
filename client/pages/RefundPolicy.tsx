import { PolicyPageLayout } from "@/components/site/PolicyPageLayout";

export default function RefundPolicy() {
  return (
    <PolicyPageLayout
      title="Refund Policy"
      lastUpdated="Jan 2026"
      description={
        <>
          At <strong>The Honest Herbalist</strong>, we want you to feel
          confident trying our products. If something isn’t right, we’ll work
          with you to make it right.
        </>
      }
    >
      <h2>60-Day Satisfaction Guarantee</h2>
      <p>
        If you’re not satisfied with your purchase for any reason, you may
        request a refund within <strong>60 days</strong> of your purchase date.
      </p>

      <h3>How to request a refund</h3>
      <p>
        Email us at{" "}
        <a href="mailto:support@thehonestherbalist.com">
          support@thehonestherbalist.com
        </a>{" "}
        with:
      </p>
      <ul>
        <li>
          Your <strong>order number</strong>
        </li>
        <li>
          The <strong>item(s)</strong> you purchased
        </li>
        <li>
          A short note on what didn’t work for you (optional, but helpful)
        </li>
      </ul>

      <h2>Refund method + timing</h2>
      <ul>
        <li>
          Approved refunds are issued to the{" "}
          <strong>original payment method</strong>.
        </li>
        <li>
          We process refunds within <strong>3–5 business days</strong> after
          approval. (Your bank or card issuer may take additional time to post
          the credit.)
        </li>
      </ul>

      <h2>Shipping fees</h2>
      <p>
        <strong>Shipping charges are non-refundable.</strong>
      </p>

      <h2>Returns (if a return is required)</h2>
      <p>
        In some situations (for example, if we shipped the wrong item), we may
        ask you to return the product.
      </p>
      <ul>
        <li>We’ll provide return instructions if needed.</li>
        <li>
          Return shipping is handled based on the reason for the return (e.g.,
          our error vs. change of mind).
        </li>
      </ul>

      <h2>Damaged, defective, or incorrect items</h2>
      <p>
        If your order arrives damaged, defective, or incorrect, email{" "}
        <a href="mailto:support@thehonestherbalist.com">
          support@thehonestherbalist.com
        </a>{" "}
        within <strong>7 days of delivery</strong> with:
      </p>
      <ul>
        <li>Your order number</li>
        <li>A description of the issue</li>
        <li>Photos (recommended, if applicable)</li>
      </ul>
      <p>
        We’ll offer a <strong>replacement</strong>,{" "}
        <strong>store credit</strong>, or <strong>refund</strong> depending on
        the situation.
      </p>

      <h2>Non-refundable items (where permitted by law)</h2>
      <p>Unless required by law, the following are not eligible for refunds:</p>
      <ul>
        <li>
          <strong>Digital downloads</strong> (once accessed, except where
          defective)
        </li>
        <li>
          <strong>Gift cards</strong>
        </li>
        <li>
          Items marked <strong>Final Sale</strong>
        </li>
      </ul>

      <h2>Chargebacks</h2>
      <p>
        If there’s an issue with your order, please contact us first so we can
        help. Unresolved chargebacks may limit future purchases.
      </p>
    </PolicyPageLayout>
  );
}
