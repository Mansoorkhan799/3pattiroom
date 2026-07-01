import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "Deposit Money in 3 Patti Room – JazzCash & EasyPaisa Guide";
const PAGE_DESCRIPTION =
  "Learn how to deposit money in 3 Patti Room using JazzCash and EasyPaisa. Step-by-step guide to add funds to your Teen Patti Room wallet in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/deposit-money-in-3-patti-room` },
};

const depositSteps = [
  "Open the 3 Patti Room app on your device and log in to your account.",
  "On the main menu, tap on the deposit button to start the process.",
  "Choose a payment method, like Easypaisa or Jazzcash.",
  "Enter the amount that you want to add to your game wallet.",
  "Recheck all the details and tap on the deposit button.",
  "Now, enter your transaction pin to confirm the payment request.",
  "Wait a few seconds, and your money will be added to your app wallet.",
];

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
          name: "How to Deposit Money in 3 Patti Room",
          description: PAGE_DESCRIPTION,
          steps: depositSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Deposit Money in 3 Patti Room"
        description="To play real cash games, you need to deposit money into the game wallet. The process is simple and requires a few steps that are listed below."
      />
      <GuideContent>
        <StepList
          title="Deposit Method"
          intro="3 Patti Room supports local payment methods, which are easy and reliable in Pakistan. You can use JazzCash and EasyPaisa to add or withdraw your money."
          steps={depositSteps}
        />
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-accent mb-3">Local Payment Options</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            3 Patti Room supports local payment methods, which are easy and reliable in Pakistan. You can use JazzCash and EasyPaisa to add or withdraw your money. These options are easy to use and have a secure encryption system to ensure safe transactions. The local payment methods are easy to use, making the transaction system smooth and secure without any worry.
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
