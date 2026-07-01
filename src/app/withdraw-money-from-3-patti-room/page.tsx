import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { WITHDRAW_STEPS } from "@/lib/guide-steps";

const PAGE_TITLE = "How to Withdraw Money from 3 Patti Room – Pakistan Cash Out Guide";
const PAGE_DESCRIPTION =
  "How to withdraw money from 3 Patti Room to JazzCash or EasyPaisa. Complete Teen Patti Room cash out and wallet withdrawal guide for players in Pakistan.";

const withdrawFaqs = [
  {
    question: "How to withdraw money from 3 Patti Room?",
    answer:
      "Open the app, go to Wallet, tap Withdraw, choose JazzCash or EasyPaisa, enter your details and amount, submit, and wait a few minutes for the transfer.",
  },
  {
    question: "How to withdraw from Teen Patti Room?",
    answer:
      "Teen Patti Room uses the same withdrawal process as 3 Patti Room. Login, open the wallet, select withdraw, pick your payment method, and confirm the amount.",
  },
  {
    question: "How long does 3 Patti Room withdrawal take?",
    answer:
      "Most withdrawals complete within a few minutes. If delayed, check your details, ensure sufficient balance, and contact support with your transaction ID.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/withdraw-money-from-3-patti-room` },
  keywords: [
    "how to withdraw money from 3 patti room",
    "how to withdraw from teen patti room",
    "3 patti room cash out",
    "teen patti room withdrawal pakistan",
  ],
};

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
          steps: [...WITHDRAW_STEPS],
        }}
        faqs={withdrawFaqs}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="How to Withdraw Money from 3 Patti Room"
        description="If you want to cash out winnings from your Teen Patti Room wallet, follow this step-by-step withdrawal guide for JazzCash and EasyPaisa."
      />
      <GuideContent>
        <StepList title="How to Withdraw from 3 Patti Room" steps={[...WITHDRAW_STEPS]} />
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-accent mb-3">What should I do if my withdrawal fails?</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Refresh the app or check that your internet connection is stable. Verify your JazzCash or EasyPaisa account details match your bound wallet. Contact 3 Patti Room customer support with transaction proof if the issue continues.
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
