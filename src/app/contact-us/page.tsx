import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `Contact Us – ${SITE_NAME}`;
const PAGE_DESCRIPTION = `Get in touch with the ${SITE_NAME} team. Contact us for content issues, guide suggestions, or feedback about our Teen Patti Room information site.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
};

export default function ContactUsPage() {
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
            <span className="breadcrumbs-current">Contact Us</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Contact <span className="text-accent">Us</span>
      </h1>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <p>
            We are always happy to hear from our readers. Whether you have a question about a guide, found incorrect information, or want to suggest a new topic, feel free to reach out.
          </p>
        </section>

        <section className="glass-card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-accent mb-1">Email</h2>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-accent mb-1">Website</h2>
            <a
              href={SITE_ORIGIN}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {SITE_ORIGIN}
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-accent mb-1">Response Time</h2>
            <p className="text-gray-400 text-sm">We aim to respond within 24–48 hours.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">What Can We Help With?</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-300">
            <li>Incorrect or outdated information on our guides</li>
            <li>Suggestions for new blog posts or tutorials</li>
            <li>Reporting broken links or page errors</li>
            <li>General feedback about the website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">For App Support</h2>
          <p className="text-sm text-gray-400">
            For issues with the 3 Patti Room app itself (account problems, payment delays, game bugs), please contact the official in-app customer support team directly. This website is an independent information site and cannot access your game account.
          </p>
          <p className="mt-3 text-sm">
            <Link href={ROUTES.blog} className="text-accent hover:text-accent-light">
              Browse our troubleshooting guides →
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
