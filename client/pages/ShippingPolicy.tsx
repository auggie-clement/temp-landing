import { PolicyPageLayout } from "@/components/site/PolicyPageLayout";

export default function ShippingPolicy() {
  return (
    <PolicyPageLayout
      title="Shipping Policy"
      lastUpdated="Jan 2026"
      description={
        <>
          This Shipping Policy explains how we process, ship, and deliver orders
          placed with <strong>The Honest Herbalist</strong>.
        </>
      }
    >
      <h2>Processing time</h2>
      <p>
        Orders are typically processed within <strong>1–2 business days</strong>
        {" "}(excluding weekends and holidays). During high-volume periods
        (sales, holidays, launches), processing may take longer.
      </p>

      <h2>Shipping rates</h2>
      <p>
        Shipping costs are <strong>calculated at checkout</strong> unless
        otherwise stated.
      </p>

      <h2>Delivery estimates</h2>
      <p>Delivery times are estimates and begin after your order ships:</p>
      <ul>
        <li>
          <strong>United States:</strong> <strong>3–8 business days</strong>
        </li>
        <li>
          <strong>Canada:</strong> <strong>7–14 business days</strong>
        </li>
        <li>
          <strong>International (if offered):</strong> <strong>10–21 business days</strong>
        </li>
      </ul>

      <h2>Tracking</h2>
      <p>
        When available, we’ll email tracking information to the email address
        provided at checkout. Tracking may take <strong>24–48 hours</strong> to
        update after the label is created.
      </p>

      <h2>Address accuracy</h2>
      <p>Please verify your shipping address before placing your order.</p>
      <ul>
        <li>
          If an order is returned to us due to an incorrect or incomplete
          address, we can reship it after you confirm the correct address.
          Additional shipping fees may apply.
        </li>
      </ul>

      <h2>Delays, lost, or missing packages</h2>
      <p>
        If your tracking hasn’t updated or your package appears missing, contact
        us at{" "}
        <a href="mailto:support@thehonestherbalist.com">
          support@thehonestherbalist.com
        </a>
        {" "}and include your order number. We’ll help investigate with the
        carrier and work with you on a resolution where appropriate.
      </p>

      <h2>International orders (only if you ship internationally)</h2>
      <p>
        International shipments may be subject to <strong>customs duties</strong>,{" "}
        <strong>taxes</strong>, and <strong>import fees</strong> determined by
        the destination country. These fees are the customer’s responsibility
        unless explicitly stated otherwise.
      </p>
    </PolicyPageLayout>
  );
}
