export const ROUTES = {
  home: "/",
  download: "/download-3-patti-room",
  deposit: "/deposit-money-in-3-patti-room",
  withdraw: "/withdraw-money-from-3-patti-room",
  register: "/register-3-patti-room-account",
  login: "/login-3-patti-room",
  pc: "/3-patti-room-for-pc",
  blog: "/blog",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.download, label: "Download" },
  { href: ROUTES.register, label: "Register" },
  { href: ROUTES.login, label: "Login" },
  { href: ROUTES.deposit, label: "Deposit" },
  { href: ROUTES.withdraw, label: "Withdraw" },
  { href: ROUTES.pc, label: "PC Version" },
  { href: ROUTES.blog, label: "Blog" },
] as const;

export const FOOTER_GUIDE_LINKS = [
  { href: ROUTES.download, label: "Download Guide" },
  { href: ROUTES.register, label: "Register Account" },
  { href: ROUTES.login, label: "Login Guide" },
  { href: ROUTES.deposit, label: "Deposit Guide" },
  { href: ROUTES.withdraw, label: "Withdraw Guide" },
  { href: ROUTES.pc, label: "PC Version" },
  { href: ROUTES.blog, label: "Blog" },
] as const;
