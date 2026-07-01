import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, GuideImage, StepList } from "@/components/GuidePage";
import DownloadButton from "@/components/DownloadButton";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "Register 3 Patti Room Account – Sign Up Guide 2026";
const PAGE_DESCRIPTION =
  "How to register for an account on the 3 Patti Room app. Step-by-step sign up guide with OTP verification for Teen Patti Room in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/register-3-patti-room-account` },
};

const registerSteps = [
  "Open the 3Patti Room app on your device and make sure you are using the official app.",
  "On the main screen, tap on the Play as Guest option to enter the game lobby.",
  "Inside the game, go to the Profile section and bind your active mobile number or Email address.",
  "After that, you will receive an OTP for the verification process.",
  "Check your email inbox and enter the OTP correctly.",
  "Now create a strong password with a mix of letters, numbers, and symbols.",
  "Recheck all the details you entered and tap on the register.",
  "The account is successfully created, and you can explore the different games.",
];

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Register", path: ROUTES.register },
];

export default function RegisterPage() {
  return (
    <>
      <PageSchemas
        id="register-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.register, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Register a 3 Patti Room Account",
          description: PAGE_DESCRIPTION,
          steps: registerSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Register 3 Patti Room Account"
        description="Creating an account on 3Patti Room is very simple and only takes a few minutes. Follow these steps carefully to register an account."
      />
      <GuideContent>
        <GuideImage src={IMAGES.bindMail} alt="3 Patti Room registration - Bind Mail screen" />
        <StepList title="Registration Process" steps={registerSteps} />
        <p className="text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <Link href={ROUTES.login} className="text-accent hover:text-accent-light">
            Go to Login Guide
          </Link>
        </p>
        <p className="text-sm text-gray-400 text-center">
          Getting &quot;bound by other ID&quot;?{" "}
          <Link href={`${ROUTES.blog}/account-bound-by-other-id-3-patti-room-fix`} className="text-accent hover:text-accent-light">
            Read the fix guide
          </Link>
        </p>
        <div className="flex justify-center pt-4">
          <DownloadButton />
        </div>
      </GuideContent>
    </>
  );
}
