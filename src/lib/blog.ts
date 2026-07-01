import { SITE_ORIGIN, SITE_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  category: string;
  readTime: string;
  howToSteps: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ip-exceeds-limit-3-patti-room-fix",
    title: "IP Exceeds Limit in 3 Patti Room – How to Fix (2026)",
    description:
      "Getting IP exceeds limit error in 3 Patti Room? Learn why it happens and how to fix it on mobile data, WiFi, or PC in Pakistan.",
    datePublished: "2026-07-01",
    category: "Troubleshooting",
    readTime: "5 min read",
    howToSteps: [
      "Turn off WiFi and switch to mobile data, or vice versa",
      "Restart your phone and router, then wait 10–15 minutes",
      "Clear 3 Patti Room app cache from phone settings",
      "Log out from extra accounts on the same network",
      "Disable VPN or proxy apps before opening the game",
      "Wait 24 hours if the limit was hit repeatedly",
      "Contact in-app customer support with your user ID if needed",
    ],
  },
  {
    slug: "verification-failed-token-is-null-3-patti-room",
    title: "Verification Failed, Token Is Null – 3 Patti Room Error Fix",
    description:
      "Fix verification failed and token is null error in 3 Patti Room app. Step-by-step solutions for login, deposit and withdraw issues in Pakistan.",
    datePublished: "2026-06-30",
    category: "Troubleshooting",
    readTime: "6 min read",
    howToSteps: [
      "Connect to stable 4G/5G or strong WiFi",
      "Update or reinstall the latest 3 Patti Room APK",
      "Log out, force-close the app, and log in again",
      "Enable automatic date and time on your phone",
      "Clear app cache without deleting account data",
      "Complete JazzCash or EasyPaisa payment without switching apps",
      "Restart emulator if playing on PC",
      "Contact support with error screenshot if it persists",
    ],
  },
  {
    slug: "application-canceled-withdrawal-returned-3-patti-room",
    title: "Application Canceled, Withdrawal Has Been Returned – 3 Patti Room",
    description:
      "Why does 3 Patti Room show application canceled or withdrawal returned? Learn causes and how to get your money back safely.",
    datePublished: "2026-06-29",
    category: "Withdraw",
    readTime: "5 min read",
    howToSteps: [
      "Check Wallet → Transaction History for returned balance",
      "Verify JazzCash or EasyPaisa number and account name",
      "Complete pending identity or phone binding",
      "Wait 30–60 minutes before submitting a new withdraw",
      "Try a smaller amount if daily limit was reached",
      "Avoid multiple withdraw requests at once",
      "Contact support with transaction ID if money is missing",
    ],
  },
  {
    slug: "how-to-load-money-easypaisa-jazzcash-3-patti-room",
    title: "How to Load Money in 3 Patti Room from EasyPaisa & JazzCash",
    description:
      "Complete guide to load money in 3 Patti Room using JazzCash and EasyPaisa. Deposit steps, limits, and common payment fixes for Pakistan.",
    datePublished: "2026-06-28",
    category: "Deposit",
    readTime: "6 min read",
    howToSteps: [
      "Open 3 Patti Room and log in to your account",
      "Tap Deposit or Add Money on the main screen",
      "Select JazzCash or EasyPaisa as payment method",
      "Enter the deposit amount within app limits",
      "Confirm your wallet mobile number is correct",
      "Approve payment with MPIN in the wallet app",
      "Return to 3 Patti Room and wait for balance update",
    ],
  },
  {
    slug: "how-to-recover-password-3-patti-room",
    title: "How to Recover Password in 3 Patti Room – Account Recovery Guide",
    description:
      "Forgot your 3 Patti Room password? Learn how to recover or reset your Teen Patti Room account password using phone number, email, or customer support in Pakistan.",
    datePublished: "2026-07-02",
    category: "Account",
    readTime: "4 min read",
    howToSteps: [
      "Open the 3 Patti Room app and tap the Login button",
      "On the login screen, tap 'Forgot Password'",
      "Enter your registered phone number or email address",
      "Receive and enter the OTP sent to your number or email",
      "Create a new strong password and confirm it",
      "Log in with your new password to access your account",
      "Contact customer support if you no longer have access to your phone or email",
    ],
  },
  {
    slug: "account-bound-by-other-id-3-patti-room-fix",
    title: "Your Account Has Been Bound by Other ID – How to Fix in 3 Patti Room",
    description:
      "Fix account bound by other ID error in 3 Patti Room. Learn how to unbind phone, email or CNIC and recover your Teen Patti Room account.",
    datePublished: "2026-06-27",
    category: "Account",
    readTime: "6 min read",
    howToSteps: [
      "Try logging in with your old password instead of registering again",
      "Use Forgot Password on the login screen",
      "Check Profile → Bind Mail / Phone on the original account",
      "Contact customer support to request ID unbinding",
      "Provide proof of ownership for phone or CNIC",
      "Use a different phone number if unbinding is not possible",
      "Wait 24–48 hours after support unbinds before rebinding",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function blogPostUrl(slug: string) {
  return `${ROUTES.blog}/${slug}`;
}

export const blogPublisher = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_ORIGIN}${IMAGES.app}`,
    ...imageObjectLicensing,
  },
};
