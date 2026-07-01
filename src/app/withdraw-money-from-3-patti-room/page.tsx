import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "Withdraw Money from 3 Patti Room – Cash Out Guide Pakistan";
const PAGE_DESCRIPTION =
  "How to withdraw money from 3 Patti Room wallet using JazzCash and EasyPaisa. Complete cash out guide for Teen Patti Room players in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/withdraw-money-from-3-patti-room` },
};

const withdrawSteps = [
  "First, open the official app and log in to your account.",
  "Go to the wallet section and tap on withdraw.",
  "Select your payment method and enter the required details carefully",
  "Enter the amount that you want to withdraw from the game.",
  "Double-check all the details to avoid any errors.",
  "Click on the submit option and wait for it to complete.",
  "After a few minutes, your money will be transferred to your selected account.",
];

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Withdraw Guide", path: ROUTES.withdraw },
];

export default function WithdrawPage() {
  return (
    <>
      <PageSchemas
        id="withdraw-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.withdraw, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Withdraw Money from 3 Patti Room",
          description: PAGE_DESCRIPTION,
          steps: withdrawSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Withdraw Money from 3 Patti Room"
        description="If you want to withdraw your winnings from the 3Patti Room Game wallet, follow the steps below."
      />
      <GuideContent>
        <StepList title="WIthdrawal Method" steps={withdrawSteps} />
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-accent mb-3">What should I do if my transactions fail?</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Refresh the page or check that your internet connection is stable. You can also contact the customer support team of 3Patti Room with transaction proofs to get help.
          </p>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Seeing &quot;application canceled&quot; or &quot;withdrawal returned&quot;? Read our{" "}
          <Link
            href={`${ROUTES.blog}/application-canceled-withdrawal-returned-3-patti-room`}
            className="text-accent hover:text-accent-light"
          >
            withdrawal returned fix guide
          </Link>
          .
        </p>
      </GuideContent>
    </>
  );
}
