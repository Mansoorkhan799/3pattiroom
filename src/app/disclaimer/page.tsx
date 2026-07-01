import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `Disclaimer – ${SITE_NAME}`;
const PAGE_DESCRIPTION = `Disclaimer for ${SITE_NAME}. This is an independent information site about the 3 Patti Room app and is not affiliated with the official developers.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
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
            <span className="breadcrumbs-current">Disclaimer</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        <span className="text-accent">Disclaimer</span>
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 2, 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <p>
            Please read this disclaimer carefully before using <strong className="text-white">teenpattiroomapp.com.pk</strong>. By accessing or using this website, you agree to be bound by the terms described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">1. Independent Website</h2>
          <p>
            <strong className="text-white">{SITE_NAME}</strong> (teenpattiroomapp.com.pk) is an independent, fan-created informational website. We are <strong className="text-white">not</strong> the official developers, owners, or representatives of the 3 Patti Room app. We have no affiliation with the game company and cannot access user accounts, process payments, or resolve in-app issues.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">2. Informational Purpose Only</h2>
          <p>
            All content on this website — including guides, blog posts, tutorials, and FAQs — is provided for general informational purposes only. While we strive to keep information accurate and up to date, we make no guarantees about the completeness, accuracy, or suitability of the content for any particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">3. No Financial Advice</h2>
          <p>
            Nothing on this website constitutes financial, investment, or gambling advice. Online gaming involves real money and financial risk. You are solely responsible for any decisions you make when depositing, playing, or withdrawing funds in the 3 Patti Room app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">4. Responsible Gaming</h2>
          <p>
            We strongly encourage responsible gaming. Only play with money you can afford to lose. If you or someone you know is struggling with gambling, please seek help from a qualified professional or support organization.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">5. Third-Party Links</h2>
          <p>
            This website may contain links to external sites, including the official 3 Patti Room download page. These links are provided for convenience. We are not responsible for the content, accuracy, privacy practices, or availability of any third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">6. Content Changes</h2>
          <p>
            The 3 Patti Room app may update its interface, features, payment methods, or policies at any time without notice. Our guides may not always reflect the latest app version. Always verify critical steps directly within the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {SITE_NAME} and its operators shall not be liable for any loss or damage arising from the use of, or reliance on, information provided on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">8. Contact</h2>
          <p>
            For questions about this disclaimer, contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-light">
              {SUPPORT_EMAIL}
            </a>{" "}
            or visit our{" "}
            <Link href="/contact-us" className="text-accent hover:text-accent-light">
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
