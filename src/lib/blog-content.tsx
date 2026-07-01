import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { createSingleBrandLinker } from "@/components/BrandText";

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  footerLink?: { href: string; label: string };
};

export const BLOG_ARTICLE_CONTENT: Record<string, { articleBody: string; sections: BlogSection[] }> = {
  "ip-exceeds-limit-3-patti-room-fix": {
    articleBody:
      "IP exceeds limit error in 3 Patti Room happens when too many accounts or logins use the same internet connection. Fix by switching mobile data, restarting router, clearing app cache, or waiting 24 hours. Avoid VPN and multiple accounts on one device.",
    sections: [
      {
        paragraphs: [
          "The IP exceeds limit error in 3 Patti Room usually appears when the app detects too many accounts or login attempts from the same internet connection (same IP address). This is a security feature to prevent abuse, but it can block genuine players in Pakistan who share WiFi with family or use mobile data on a busy network.",
        ],
      },
      {
        heading: "Why Does IP Exceeds Limit Happen?",
        paragraphs: [
          "3 Patti Room limits how many accounts can connect from one IP at the same time. Common triggers include:",
        ],
        list: [
          "Multiple 3 Patti Room accounts logged in on the same WiFi",
          "Frequent login/logout on the same phone or PC",
          "Using a VPN or proxy that shares an IP with many users",
          "Playing on an emulator while others use the same network",
          "Public WiFi or shared mobile hotspot with heavy traffic",
        ],
      },
      {
        heading: "How to Fix IP Exceeds Limit in 3 Patti Room",
        list: [
          "Turn off WiFi and switch to mobile data (Jazz, Zong, Ufone, Telenor), or vice versa",
          "Restart your phone and router, then open the app again after 10–15 minutes",
          "Clear 3 Patti Room app cache: Settings → Apps → 3 Patti Room → Clear Cache (do not clear data unless needed)",
          "Log out from extra accounts on other devices using the same network",
          "Disable VPN, proxy, or DNS apps before opening 3 Patti Room",
          "Wait 24 hours if the limit was hit repeatedly — the block is often temporary",
          "Contact 3 Patti Room customer support inside the app with your user ID if the error continues",
        ],
        footerLink: {
          href: `${ROUTES.blog}/verification-failed-token-is-null-3-patti-room`,
          label: "Also see: verification failed / token is null fix",
        },
      },
      {
        heading: "Tips to Avoid IP Limit in Future",
        paragraphs: [
          "Use one account per device, avoid switching networks during deposit or withdraw, and do not create multiple accounts on the same phone. If you play on PC via emulator, use a stable home connection instead of shared office or café WiFi.",
        ],
        footerLink: {
          href: `${ROUTES.blog}/account-bound-by-other-id-3-patti-room-fix`,
          label: "Read: account bound by other ID — how to fix",
        },
      },
    ],
  },
  "verification-failed-token-is-null-3-patti-room": {
    articleBody:
      "Verification failed token is null in 3 Patti Room is a session error during login or payment. Fix by updating the app, checking internet, re-logging in, clearing cache, syncing device time, and retrying JazzCash or EasyPaisa verification.",
    sections: [
      {
        paragraphs: [
          "Verification failed, token is null is one of the most common 3 Patti Room errors in Pakistan. It usually appears during login, deposit, withdraw, or when the app tries to verify your JazzCash or EasyPaisa payment but loses the secure session token.",
        ],
      },
      {
        heading: "What Does Token Is Null Mean?",
        paragraphs: [
          "A token is a temporary security key the app uses to confirm your identity. When it shows as null, the app could not complete verification — often due to a weak connection, outdated APK, or an interrupted payment popup.",
        ],
      },
      {
        heading: "Step-by-Step Fix",
        list: [
          "Check your internet — use stable 4G/5G or strong WiFi before logging in",
          "Download the latest 3 Patti Room APK from the official source and reinstall",
          "Log out completely, force-close the app, and log in again",
          "Go to phone Settings → Date & Time → enable automatic date/time (wrong time breaks tokens)",
          "Clear app cache without deleting your account data",
          "For JazzCash/EasyPaisa: complete the payment in the wallet app and return to 3 Patti Room quickly",
          "Do not switch apps while the verification screen is loading",
          "If using an emulator on PC, restart the emulator and try again",
        ],
        footerLink: {
          href: ROUTES.login,
          label: "View full login guide",
        },
      },
      {
        heading: "Still Getting the Error?",
        paragraphs: [
          "Take a screenshot of the error, note the time, and contact in-app customer support. Mention whether it happened on login, deposit, or withdraw so they can reset your session.",
        ],
        footerLink: {
          href: `${ROUTES.blog}/how-to-load-money-easypaisa-jazzcash-3-patti-room`,
          label: "Related: how to load money from JazzCash & EasyPaisa",
        },
      },
    ],
  },
  "application-canceled-withdrawal-returned-3-patti-room": {
    articleBody:
      "Application canceled and withdrawal has been returned in 3 Patti Room means your cash out was rejected and funds sent back to your wallet. Causes include wrong account details, name mismatch, limits, or verification failure.",
    sections: [
      {
        paragraphs: [
          "If 3 Patti Room shows application canceled or withdrawal has been returned, your withdraw request was not completed and the amount should return to your in-app wallet. This message is common among Pakistani players using JazzCash and EasyPaisa.",
        ],
      },
      {
        heading: "Common Reasons Withdrawal Is Returned",
        list: [
          "Wrong JazzCash or EasyPaisa number entered",
          "Account name does not match the wallet holder name",
          "Insufficient verified balance or bonus not eligible for withdraw",
          "Daily or weekly withdraw limit reached",
          "Verification failed during the payment step",
          "Server maintenance or temporary payment gateway issue",
          "Account under review for security reasons",
        ],
        footerLink: {
          href: `${ROUTES.blog}/verification-failed-token-is-null-3-patti-room`,
          label: "Fix verification failed errors first",
        },
      },
      {
        heading: "What to Do When Withdrawal Is Canceled",
        list: [
          "Open Wallet → Transaction History and confirm the amount was returned",
          "Double-check your JazzCash/EasyPaisa number and registered name",
          "Complete any pending identity or phone binding in the app",
          "Wait 30–60 minutes and submit a new withdraw with the correct details",
          "Withdraw a smaller amount if you hit the daily limit",
          "Avoid multiple withdraw requests at the same time",
          "Contact customer support with transaction ID and screenshot if money is missing",
        ],
        footerLink: {
          href: ROUTES.withdraw,
          label: "Full withdraw money guide",
        },
      },
      {
        heading: "How Long Until Money Returns?",
        paragraphs: [
          "Returned withdrawals usually appear in your 3 Patti Room wallet within a few minutes to 24 hours. If the balance is not restored after one day, contact support with proof of the canceled application.",
        ],
      },
    ],
  },
  "how-to-load-money-easypaisa-jazzcash-3-patti-room": {
    articleBody:
      "To load money in 3 Patti Room from JazzCash or EasyPaisa, open the app, tap deposit, choose your wallet, enter amount, confirm with MPIN, and wait for balance update. Ensure sufficient wallet balance and stable internet.",
    sections: [
      {
        paragraphs: [
          "Loading money in 3 Patti Room from JazzCash and EasyPaisa is the fastest way for Pakistani players to start real cash Teen Patti games. Both wallets are supported directly inside the app.",
        ],
      },
      {
        heading: "How to Load from JazzCash",
        list: [
          "Open 3 Patti Room and log in to your account",
          "Tap Deposit or Add Money on the main screen",
          "Select JazzCash as payment method",
          "Enter the amount you want to load (check minimum deposit limit)",
          "Confirm your JazzCash mobile number matches your registered wallet",
          "You will be redirected to JazzCash — enter your MPIN to approve",
          "Return to 3 Patti Room; balance updates in a few seconds",
        ],
      },
      {
        heading: "How to Load from EasyPaisa",
        list: [
          "Open 3 Patti Room and go to the deposit section",
          "Choose EasyPaisa as your payment option",
          "Type the deposit amount carefully",
          "Confirm the EasyPaisa account linked to your phone number",
          "Complete payment using your EasyPaisa PIN in the wallet app",
          "Wait for success notification — chips appear in your game wallet",
        ],
        footerLink: {
          href: ROUTES.deposit,
          label: "Step-by-step deposit guide",
        },
      },
      {
        heading: "Load Money Not Working?",
        paragraphs: [
          "Make sure your JazzCash or EasyPaisa account has enough balance plus any service fee. Use stable internet, update the app, and avoid canceling the payment screen.",
        ],
        footerLink: {
          href: `${ROUTES.blog}/verification-failed-token-is-null-3-patti-room`,
          label: "Troubleshoot: verification failed / token is null",
        },
      },
    ],
  },
  "how-to-recover-password-3-patti-room": {
    articleBody:
      "To recover your 3 Patti Room password, tap Forgot Password on the login screen, enter your registered phone number or email, verify with OTP, then set a new password. If you lost access to your number, contact in-app customer support.",
    sections: [
      {
        paragraphs: [
          "Forgetting your 3 Patti Room password is common, especially if you reinstall the app or switch phones. The good news is that Teen Patti Room has a built-in account recovery option that lets you reset your password using your registered phone number or email address.",
        ],
      },
      {
        heading: "How to Recover Your 3 Patti Room Password",
        list: [
          "Open the 3 Patti Room app and tap the Login button on the main screen",
          "Below the password field, tap on 'Forgot Password'",
          "Enter the phone number or email address you used when registering",
          "You will receive a one-time password (OTP) on your phone or email",
          "Enter the OTP correctly on the verification screen",
          "Create a new strong password — use a mix of letters and numbers",
          "Confirm the new password and tap Submit to save it",
          "Log in with your new password to access your account",
        ],
        footerLink: {
          href: ROUTES.login,
          label: "Full login guide for 3 Patti Room",
        },
      },
      {
        heading: "What If I Lost Access to My Phone Number or Email?",
        paragraphs: [
          "If you can no longer receive OTP on your old number or email, open the app and go to the Help or Support section. Contact the customer support team with your user ID, the old registered number, and any proof of account ownership (such as a deposit receipt or referral code). The support team can help verify and recover your account.",
        ],
        footerLink: {
          href: `${ROUTES.blog}/account-bound-by-other-id-3-patti-room-fix`,
          label: "Also read: account bound by other ID – how to fix",
        },
      },
      {
        heading: "Tips to Never Lose Your Password Again",
        list: [
          "Save your password in a secure place like your phone notes or a password manager",
          "Bind both your phone number and email address in Profile settings for double recovery",
          "Never share your password with anyone",
          "Enable OTP login so you can access your account even without the password",
          "Use a strong, unique password that you do not use on other apps",
        ],
        footerLink: {
          href: ROUTES.register,
          label: "How to register a new 3 Patti Room account",
        },
      },
    ],
  },
  "account-bound-by-other-id-3-patti-room-fix": {
    articleBody:
      "Account bound by other ID in 3 Patti Room means your phone, email or CNIC is linked to another account. Fix by logging into the original account, contacting support to unbind, or binding a new number after verification.",
    sections: [
      {
        paragraphs: [
          "Your account has been bound by other ID is a 3 Patti Room error that appears when you try to register or bind a phone number, email, or CNIC that is already linked to a different game account. Each ID can usually only be attached to one account for security.",
        ],
      },
      {
        heading: "Why This Error Appears",
        list: [
          "You previously created another 3 Patti Room account with the same phone number",
          "A family member used your JazzCash/EasyPaisa number on their account",
          "You reinstalled the app and tried to register again instead of logging in",
          "Old account still has your email or CNIC bound",
          "Account was sold or shared and the ID is locked to the buyer's profile",
        ],
        footerLink: {
          href: `${ROUTES.blog}/ip-exceeds-limit-3-patti-room-fix`,
          label: "Related: IP exceeds limit fix",
        },
      },
      {
        heading: "How to Fix Account Bound by Other ID",
        list: [
          "Try logging in with your old password instead of creating a new account",
          "Use Forgot Password if you remember the phone number but not the password",
          "Log into the original account and check Profile → Bind Mail / Phone settings",
          "Contact 3 Patti Room customer support and request ID unbinding (provide proof of ownership)",
          "Use a different phone number that has never been used in the app",
          "Do not buy or sell accounts — bound IDs often cannot be transferred",
          "Wait 24–48 hours after support unbinds the ID before binding again",
        ],
        footerLink: {
          href: ROUTES.register,
          label: "How to register a new account correctly",
        },
      },
      {
        heading: "Prevent Binding Problems",
        paragraphs: [
          "Always bind your own JazzCash, EasyPaisa, phone, and email. Keep one account per person and save your login details securely.",
        ],
        footerLink: {
          href: ROUTES.login,
          label: "Login guide for existing accounts",
        },
      },
    ],
  },
};

export function BlogArticleBody({ slug }: { slug: string }) {
  const content = BLOG_ARTICLE_CONTENT[slug];
  if (!content) return null;

  const BrandTextOnce = createSingleBrandLinker();

  return (
    <>
      {content.sections.map((section, i) => (
        <div key={i}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((p, j) => (
            <p key={j}><BrandTextOnce text={p} /></p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, k) => (
                <li key={k}><BrandTextOnce text={item} /></li>
              ))}
            </ul>
          )}
          {section.footerLink && (
            <p className="text-sm">
              <Link href={section.footerLink.href} className="text-accent hover:text-accent-light font-medium">
                → {section.footerLink.label}
              </Link>
            </p>
          )}
        </div>
      ))}
    </>
  );
}
