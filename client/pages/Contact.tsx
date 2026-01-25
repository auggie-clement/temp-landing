import { PolicyPageLayout } from "@/components/site/PolicyPageLayout";

export default function Contact() {
  return (
    <PolicyPageLayout
      title="Contact Information"
      lastUpdated="Jan 2026"
      description={
        <>
          Need help with an order, a product question, or your account? Email us
          and we’ll do our best to respond within <strong>24–48 hours</strong>
          {" "}(business days).
        </>
      }
    >
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@thehonestherbalist.com">
            support@thehonestherbalist.com
          </a>
        </li>
        <li>
          <strong>Mailing address:</strong> 8 The Green STE A, Dover DE, 19901
        </li>
      </ul>

      <p>
        For faster support, include your <strong>order number</strong> and the
        email used at checkout.
      </p>
    </PolicyPageLayout>
  );
}
