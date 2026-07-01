import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { DEPOSIT_STEPS } from "@/lib/guide-steps";

const PAGE_TITLE = "How to Add Money in 3 Patti Room – JazzCash & EasyPaisa Deposit Guide";
const PAGE_DESCRIPTION =
  "Learn how to add money (deposit) in 3 Patti Room using JazzCash and EasyPaisa. Step-by-step Teen Patti Room wallet top-up guide for players in Pakistan.";

const depositFaqs = [
  {
    question: "How to add money in 3 Patti Room?",
    answer:
      "Open the app, tap Deposit, choose JazzCash or EasyPaisa, enter the amount, confirm with your PIN, and wait a few seconds for the balance to update in your wallet.",
  },
  {
    question: "How to deposit money in Teen Patti Room?",
    answer:
      "Teen Patti Room (3 Patti Room) uses the same deposit flow: login, open the wallet, select JazzCash or EasyPaisa, enter amount, and confirm payment.",
  },
  {
    question: "Which payment methods work for 3 Patti Room deposit?",
    answer: "3 Patti Room supports JazzCash and EasyPaisa for adding money to your game wallet in Pakistan.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/deposit-money-in-3-patti-room` },
  keywords: [
    "how to add money in 3 patti room",
    "how to deposit money in 3 patti room",
    "teen patti room deposit",
    "3 patti room jazzcash",
    "3 patti room easypaisa",
  ],
};

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Deposit Guide", path: ROUTES.deposit },
];

export default function DepositPage() {
  return (
    <>
      <PageSchemas
        id="deposit-page-schema"
        breadcrumbs={breadcrumbs}
        page={{
          path: ROUTES.deposit,
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
        }}
        howTo={{
          name: "How to Add Money in 3 Patti Room",
          description: PAGE_DESCRIPTION,
          steps: [...DEPOSIT_STEPS],
        }}
        faqs={depositFaqs}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="How to Add Money in 3 Patti Room"
        description="To play real cash games on Teen Patti Room, you need to add money to your wallet. Follow this JazzCash and EasyPaisa deposit guide step by step."
      />
      <GuideContent>
        <StepList
          title="How to Deposit Money in 3 Patti Room"
          intro="3 Patti Room supports local payment methods that are easy and reliable in Pakistan. You can use JazzCash and EasyPaisa to add money to your Teen Patti Room wallet."
          steps={[...DEPOSIT_STEPS]}
        />
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-accent mb-3">Local Payment Options</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            3 Patti Room supports JazzCash and EasyPaisa for deposits in Pakistan. Both methods use secure encryption so your transactions stay safe. If payment fails, check your internet connection and PIN, then try again or contact in-app support.
          </p>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Payment error? Read our{" "}
          <Link href={`${ROUTES.blog}/how-to-load-money-easypaisa-jazzcash-3-patti-room`} className="text-accent hover:text-accent-light">
            JazzCash & EasyPaisa loading guide
          </Link>{" "}
          or{" "}
          <Link href={`${ROUTES.blog}/verification-failed-token-is-null-3-patti-room`} className="text-accent hover:text-accent-light">
            verification failed fix
          </Link>
          .
        </p>
      </GuideContent>
    </>
  );
}
