import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `About Us – ${SITE_NAME}`;
const PAGE_DESCRIPTION = `Learn about ${SITE_NAME} (Teen Patti Room), Pakistan's popular online Teen Patti earning app. Our mission, team, and commitment to fair gaming.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
};

export default function AboutUsPage() {
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
            <span className="breadcrumbs-current">About Us</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        About <span className="text-accent">{SITE_NAME}</span>
      </h1>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Who We Are</h2>
          <p>
            {SITE_NAME} (also known as Teen Patti Room) is an online gaming and earning platform built for players in Pakistan. We provide a reliable information hub covering how to download the app, add money, withdraw winnings, troubleshoot common errors, and get the most out of the Teen Patti Room experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Our Mission</h2>
          <p>
            Our mission is to help Pakistani players enjoy safe, informed, and smooth gaming on the 3 Patti Room platform. We provide step-by-step guides, troubleshooting tips, and up-to-date information so you never feel lost while using the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">What We Cover</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-300">
            <li>How to download the 3 Patti Room APK on Android and PC</li>
            <li>How to register and log in to your account</li>
            <li>How to add money via JazzCash and EasyPaisa</li>
            <li>How to withdraw winnings safely</li>
            <li>Troubleshooting common errors (IP limit, token null, withdrawal returned, etc.)</li>
            <li>Latest app version updates and features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Disclaimer</h2>
          <p>
            This website is an independent information site. We are not the official developers of the 3 Patti Room app. All guides and content are created to help users navigate the platform. Please read our full{" "}
            <Link href="/disclaimer" className="text-accent hover:text-accent-light">
              Disclaimer
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-accent hover:text-accent-light">
              Privacy Policy
            </Link>{" "}
            for more details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Contact Us</h2>
          <p>
            Have a question or want to report an issue with our content?{" "}
            <Link href="/contact-us" className="text-accent hover:text-accent-light">
              Visit our Contact page
            </Link>{" "}
            or email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-light">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
