import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import DownloadButton from "@/components/DownloadButton";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "Login 3 Patti Room – Sign In Guide 2026";
const PAGE_DESCRIPTION =
  "How to login to 3 Patti Room app safely. Sign in with mobile number or email, recover password and start playing Teen Patti Room games.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/login-3-patti-room` },
};

const loginSteps = [
  "Open the official 3Patti Room application on your device.",
  "On the main screen, tap on the Sign in or Log in button.",
  "Enter your registered mobile number or Email address.",
  "Type the password you used while registering your account.",
  "If you have forgotten your password, use the forgot password option to create a new password.",
  "Double-check all your login details and tap on the login button.",
  "Now, your account is logged in to start playing different games and earn money.",
];

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Login", path: ROUTES.login },
];

export default function LoginPage() {
  return (
    <>
      <PageSchemas
        id="login-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.login, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Login to 3 Patti Room",
          description: PAGE_DESCRIPTION,
          steps: loginSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Login to 3 Patti Room"
        description="If you already have an account, follow these steps to safely log in to your account."
      />
      <GuideContent>
        <StepList title="Log in Process" steps={loginSteps} />
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-accent mb-3">How can I recover my password?</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            If you forgot your password, you can easily recover it. On the login page, tap on the forgot password option and follow the on-screen instructions to recover your password.
          </p>
        </div>
        <p className="text-gray-400 text-sm text-center">
          New user?{" "}
          <Link href={ROUTES.register} className="text-accent hover:text-accent-light">
            Create an account
          </Link>
        </p>
        <p className="text-sm text-gray-400 text-center">
          Login error? Try our{" "}
          <Link href={`${ROUTES.blog}/verification-failed-token-is-null-3-patti-room`} className="text-accent hover:text-accent-light">
            verification failed / token is null fix
          </Link>
        </p>
        <div className="flex justify-center pt-4">
          <DownloadButton />
        </div>
      </GuideContent>
    </>
  );
}
