import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `Privacy Policy – ${SITE_NAME}`;
const PAGE_DESCRIPTION = `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your information when you visit teenpattiroomapp.com.pk.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-14">
      {/* Breadcrumb */}
      <nav className="breadcrumbs mb-8">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link href={ROUTES.home} className="breadcrumbs-link">Home</Link>
            <span className="breadcrumbs-separator">/</span>
          </li>
          <li className="breadcrumbs-item">
            <span className="breadcrumbs-current">Privacy Policy</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Privacy <span className="text-accent">Policy</span>
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 2, 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <p>
            Welcome to <strong className="text-white">{SITE_NAME}</strong> (<strong className="text-white">teenpattiroomapp.com.pk</strong>). This Privacy Policy explains how we handle information when you visit our website. We are committed to protecting your privacy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">1. Information We Collect</h2>
          <p className="mb-3">
            This is an informational website. We do not require you to create an account or submit personal data to access our content. However, we may automatically collect limited technical data through standard web server logs, including:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-400 text-sm">
            <li>Browser type and version</li>
            <li>Pages visited and time spent on page</li>
            <li>Referring URL</li>
            <li>Approximate geographic location (country/city level)</li>
            <li>Device type (mobile, desktop)</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400">
            This data is used solely to understand how visitors use the site and to improve content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">2. Cookies</h2>
          <p>
            We may use essential cookies to ensure the website functions correctly. We do not use cookies to track you across third-party websites or for advertising purposes. You can disable cookies in your browser settings, although some site features may not work as intended.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">3. Third-Party Links</h2>
          <p>
            Our website contains links to the 3 Patti Room app download page and other external sites. Once you click these links and leave our website, we have no control over the privacy practices of those third parties. We encourage you to review their privacy policies before submitting any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">4. Analytics</h2>
          <p>
            We may use Google Analytics or similar tools to collect anonymized usage data. This helps us understand which pages are most helpful and how to improve the site. Google Analytics data is anonymized and does not identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">5. Data Security</h2>
          <p>
            We take reasonable steps to protect any data collected from unauthorized access. However, no transmission over the internet is 100% secure. We do not store sensitive personal information such as passwords, bank details, or payment information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">6. Children's Privacy</h2>
          <p>
            This website is not directed at children under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has submitted personal data, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">8. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-light">
              {SUPPORT_EMAIL}
            </a>{" "}
            or visit our{" "}
            <Link href="/contact-us" className="text-accent hover:text-accent-light">
              Contact Us page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
