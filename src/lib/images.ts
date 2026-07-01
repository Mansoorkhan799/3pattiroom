/** 3 Patti Room image assets in /public */
export const IMAGES = {
  app: '/3-patti-room.webp',
  game: '/3-patti-room-game.webp',
  bindMail: '/3-patti-room-bind-mail.webp',
  addMoney: '/3-patti-room-add-money.webp',
  withdrawMoney: '/3-patti-room-withdraw-money.webp',
  referAndEarn: '/3-patti-room-refer-and-earn.webp',
  referrals: '/3-patti-room-refferals.webp',
  pakistan: '/3-patti-room-pakistan.webp',
} as const;

export const APP_ICON_SIZE = { width: 1000, height: 1000 } as const;
export const SCREENSHOT_SIZE = { width: 1200, height: 560 } as const;

/** All app screenshots except the main app icon — used once in the gallery */
export const SCREENSHOTS = [
  { src: IMAGES.game, label: '3 Patti Room', alt: '3 Patti Room app loading screen' },
  { src: IMAGES.pakistan, label: 'Games Collection', alt: '3 Patti Room games collection lobby' },
  { src: IMAGES.referAndEarn, label: 'Bonuses & Rewards', alt: '3 Patti Room bonuses and rewards' },
  { src: IMAGES.addMoney, label: 'Add Money', alt: '3 Patti Room add money deposit screen' },
  { src: IMAGES.withdrawMoney, label: 'Cash Out', alt: '3 Patti Room cash out withdraw screen' },
  { src: IMAGES.referrals, label: 'Refer & Earn', alt: '3 Patti Room refer and earn program' },
  { src: IMAGES.bindMail, label: 'Account Security', alt: '3 Patti Room account registration bind mail' },
] as const;

export type ImageKey = keyof typeof IMAGES;
