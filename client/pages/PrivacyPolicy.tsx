import { PolicyPageLayout } from "@/components/site/PolicyPageLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      lastUpdated="Jan 2026"
      description={
        <>
          This Privacy Policy explains how <strong>The Honest Herbalist</strong>
          {" "}(“we,” “us,” or “our”) collects, uses, and shares information
          when you visit our website, contact us, or make a purchase.
        </>
      }
    >
      <h2>Who we are</h2>
      <ul>
        <li>
          <strong>Business name:</strong> The Honest Herbalist
        </li>
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

      <h2>Information we collect</h2>

      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Contact details:</strong> name, email, phone number,
          shipping/billing address
        </li>
        <li>
          <strong>Order details:</strong> items purchased, order history, and
          customer support messages
        </li>
        <li>
          <strong>Payment information:</strong> payments are processed by our
          payment provider(s). We do not store full payment card numbers on our
          servers.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Device and usage data:</strong> IP address, browser type,
          pages viewed, approximate location, and referring URLs
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> used for site
          functionality, analytics, and (if enabled) advertising/retargeting
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Process and fulfill orders</li>
        <li>Provide customer support</li>
        <li>Send transactional messages (order confirmations, shipping updates)</li>
        <li>Improve website performance and customer experience</li>
        <li>Prevent fraud and protect our business</li>
        <li>
          <strong>Marketing (if you opt in):</strong> send newsletters, offers,
          and product updates. You can opt out at any time.
        </li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We share information only as needed to operate our business, such as
        with:
      </p>
      <ul>
        <li>Payment processors</li>
        <li>Shipping carriers and fulfillment providers</li>
        <li>Website hosting, analytics, and security providers</li>
        <li>Email/SMS service providers (if you opt in)</li>
      </ul>
      <p>
        We may also share information if required to comply with law, enforce
        our terms, or protect rights and safety.
      </p>

      <h2>Cookies and your choices</h2>
      <p>
        You can control cookies through your browser settings. Blocking cookies
        may affect site functionality. If we send marketing emails, you can opt
        out using the “unsubscribe” link in our emails.
      </p>

      <h2>Your privacy rights</h2>
      <p>
        Depending on your location, you may have rights to request access to,
        correction of, or deletion of your personal information, or to object
        to certain processing. To make a request, email{" "}
        <a href="mailto:support@thehonestherbalist.com">
          support@thehonestherbalist.com
        </a>
        .
      </p>

      <h2>Data retention</h2>
      <p>
        We retain personal information only as long as necessary to fulfill
        orders, provide support, maintain required business records, resolve
        disputes, and enforce agreements.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards
        designed to protect your information. No method of transmission or
        storage is 100% secure.
      </p>

      <h2>Children’s privacy</h2>
      <p>
        Our website is not intended for children under <strong>13</strong>, and
        we do not knowingly collect personal information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be
        posted on this page with a revised “Last updated” date.
      </p>
    </PolicyPageLayout>
  );
}
