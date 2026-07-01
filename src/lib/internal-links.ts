import { ROUTES } from "@/lib/routes";
import { BLOG_POSTS } from "@/lib/blog";

export function getRelatedPosts(slug: string, limit = 3) {
  const relatedMap: Record<string, string[]> = {
    "ip-exceeds-limit-3-patti-room-fix": [
      "verification-failed-token-is-null-3-patti-room",
      "account-bound-by-other-id-3-patti-room-fix",
    ],
    "verification-failed-token-is-null-3-patti-room": [
      "ip-exceeds-limit-3-patti-room-fix",
      "how-to-load-money-easypaisa-jazzcash-3-patti-room",
    ],
    "application-canceled-withdrawal-returned-3-patti-room": [
      "how-to-load-money-easypaisa-jazzcash-3-patti-room",
      "verification-failed-token-is-null-3-patti-room",
    ],
    "how-to-load-money-easypaisa-jazzcash-3-patti-room": [
      "application-canceled-withdrawal-returned-3-patti-room",
      "verification-failed-token-is-null-3-patti-room",
    ],
    "account-bound-by-other-id-3-patti-room-fix": [
      "verification-failed-token-is-null-3-patti-room",
      "ip-exceeds-limit-3-patti-room-fix",
    ],
  };

  const slugs = relatedMap[slug] ?? BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit).map((p) => p.slug);
  return slugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit) as typeof BLOG_POSTS;
}

export const GUIDE_LINKS = [
  { href: ROUTES.download, label: "Download 3 Patti Room APK" },
  { href: ROUTES.deposit, label: "Deposit Money Guide" },
  { href: ROUTES.withdraw, label: "Withdraw Money Guide" },
  { href: ROUTES.register, label: "Register Account" },
  { href: ROUTES.login, label: "Login Guide" },
  { href: ROUTES.pc, label: "3 Patti Room for PC" },
] as const;

export const HOMEPAGE_BLOG_LINKS = [
  { slug: "ip-exceeds-limit-3-patti-room-fix", label: "Fix IP Exceeds Limit Error" },
  { slug: "verification-failed-token-is-null-3-patti-room", label: "Verification Failed / Token Is Null" },
  { slug: "application-canceled-withdrawal-returned-3-patti-room", label: "Withdrawal Returned Fix" },
  { slug: "how-to-load-money-easypaisa-jazzcash-3-patti-room", label: "Load Money via JazzCash & EasyPaisa" },
  { slug: "account-bound-by-other-id-3-patti-room-fix", label: "Account Bound by Other ID Fix" },
] as const;
