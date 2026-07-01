import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import { Metadata } from 'next';
import DownloadButton from '@/components/DownloadButton';
import BrandText from '@/components/BrandText';
import AppInfoTable from '@/components/AppInfoTable';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import { IMAGES, APP_ICON_SIZE } from '@/lib/images';
import { SITE_NAME, SITE_ORIGIN, SITE_TITLE, SITE_META_DESCRIPTION, SEO_KEYWORDS, APP_VERSION, APP_SIZE, DOWNLOAD_URL } from '@/lib/site';
import { ROUTES } from '@/lib/routes';
import { DEPOSIT_STEPS, WITHDRAW_STEPS } from '@/lib/guide-steps';
import { breadcrumbSchema, buildSchemaGraph, faqPageSchema, howToSchema, webPageSchema, absoluteUrl } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_META_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_META_DESCRIPTION,
    images: [{ url: `${SITE_ORIGIN}${IMAGES.app}`, width: APP_ICON_SIZE.width, height: APP_ICON_SIZE.height, alt: '3 Patti Room - Teen Patti Room Game' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_META_DESCRIPTION,
    images: [`${SITE_ORIGIN}${IMAGES.app}`]
  }
};

const tocItems = [
  { id: 'what-is-teen-patti-room', label: 'What is 3 Patti Room?' },
  { id: 'unique', label: 'What Makes 3 Patti Room Unique?' },
  { id: 'features', label: 'Key Gaming Features' },
  { id: 'how-to-download', label: 'How to Download' },
  { id: 'system-requirements', label: 'System Requirements' },
  { id: 'register-login', label: 'Create an Account' },
  { id: 'how-to-add-money', label: 'How to Add Money' },
  { id: 'how-to-withdraw', label: 'How to Withdraw' },
  { id: 'bonuses', label: 'Bonuses and Promotions' },
  { id: 'popular-pakistan', label: 'Why Popular in Pakistan' },
  { id: 'customer-support', label: 'Customer Support' },
  { id: 'responsible-gaming', label: 'Responsible Gaming Tips' },
  { id: 'smart-tips', label: 'Smart Tips to Earn Maximum' },
  { id: 'pros-cons', label: 'Pros & Cons' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const faqs = [
  {
    q: 'What is Teen Patti Room?',
    a: 'Teen Patti Room is a popular online card game and earning app in Pakistan where players enjoy Teen Patti (3 Patti) with smooth graphics, fast gameplay, and real-money tables. You can download the APK, register an account, add money via JazzCash or EasyPaisa, play games, and withdraw winnings.',
  },
  {
    q: 'What is 3 Patti Room?',
    a: '3 Patti Room is the same platform as Teen Patti Room — an online Teen Patti gaming app for Android and PC. It offers classic Teen Patti modes, bonuses, local payments, and 24/7 support for Pakistani players.',
  },
  {
    q: 'How to add money in 3 Patti Room?',
    a: 'Open the app, tap Deposit, choose JazzCash or EasyPaisa, enter the amount, confirm with your transaction PIN, and wait a few seconds. See our full deposit guide at teenpattiroomapp.com.pk/deposit-money-in-3-patti-room for step-by-step instructions.',
  },
  {
    q: 'How to withdraw money from 3 Patti Room?',
    a: 'Login, open Wallet, tap Withdraw, select JazzCash or EasyPaisa, enter your bound account details and amount, then submit. Money usually arrives within minutes. Read the complete withdrawal guide on our withdraw page for details.',
  },
  { q: 'Is 3 Patti Room free to use?', a: 'Yes, downloading and registering is free. Practice mode lets you play without betting. Real cash games require a deposit to your wallet.' },
  { q: 'Which games does 3 Patti Room offer?', a: '3 Patti Room offers classic Teen Patti with Joker, Muflis, AK47, and tournament modes, plus dragon vs tiger, roulette, poker, and mini slot games.' },
  { q: 'Can I make multiple accounts on 3 Patti Room?', a: 'No. Only one account per user is allowed. Multiple accounts on the same device or IP can lead to suspension.' },
  { q: 'How can I recover my password?', a: 'On the login screen, tap Forgot Password and follow the OTP steps sent to your registered email or phone number.' },
  { q: 'Can I download 3 Patti Room on iOS?', a: 'Not yet. The iOS app is coming soon. Use Android or play on PC with an Android emulator for now.' },
  { q: 'What should I do if my transactions fail?', a: 'Check your internet, verify JazzCash or EasyPaisa PIN and account details, then retry. Contact in-app support with proof if the issue continues.' },
];

export default function Home() {
  const schemaData = buildSchemaGraph(
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      "url": `${SITE_ORIGIN}/`,
      "name": SITE_NAME,
      "description": SITE_META_DESCRIPTION,
      "inLanguage": "en-US",
      "publisher": { "@id": `${SITE_ORIGIN}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      "name": SITE_NAME,
      "url": SITE_ORIGIN,
      "logo": `${SITE_ORIGIN}${IMAGES.app}`,
    },
    breadcrumbSchema([{ name: "Home", path: ROUTES.home }]),
    webPageSchema({
      url: SITE_ORIGIN,
      name: SITE_TITLE,
      description: SITE_META_DESCRIPTION,
      pageId: `${SITE_ORIGIN}/#webpage`,
    }),
    {
      "@type": "SoftwareApplication",
      "name": SITE_NAME,
      "operatingSystem": "Android 5.0+",
      "applicationCategory": "GameApplication",
      "softwareVersion": APP_VERSION,
      "fileSize": APP_SIZE,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
      "downloadUrl": DOWNLOAD_URL,
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "ratingCount": "500000" },
    },
    faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
    howToSchema({
      name: "How to Add Money in 3 Patti Room",
      description: "Step-by-step guide to deposit money in 3 Patti Room using JazzCash and EasyPaisa.",
      steps: [...DEPOSIT_STEPS],
      url: absoluteUrl(ROUTES.deposit),
    }),
    howToSchema({
      name: "How to Withdraw Money from 3 Patti Room",
      description: "Step-by-step guide to withdraw winnings from 3 Patti Room to JazzCash or EasyPaisa.",
      steps: [...WITHDRAW_STEPS],
      url: absoluteUrl(ROUTES.withdraw),
    }),
  );

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-20 px-4 md:px-8 bg-hero-glow">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">3 Patti Room Game Download APK – </span>
                <span className="text-accent">Pakistani Earning App 2026</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                <BrandText text="Teen Patti Room is a popular online card game that allows you to enjoy a wide variety of games with its smooth graphics, easy control, and fast gameplay, which makes the gameplay more enjoyable. Click on the given download button to download this game." />
              </p>
              <div id="download" className="flex justify-center lg:justify-start pt-2">
                <DownloadButton />
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 ring-4 ring-accent/40 rounded-3xl overflow-hidden shadow-glow-lg bg-black">
                <Image
                  src={IMAGES.app}
                  alt="3 Patti Room - Teen Patti Room App"
                  fill
                  className="object-contain p-2"
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>

          <AppInfoTable />
          <ScreenshotGallery />
        </div>
      </section>

      {/* Main Content with TOC */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <nav className="sticky top-24 glass-card p-5">
              <h2 className="text-accent font-bold mb-4 text-sm uppercase tracking-wider">Table of Contents</h2>
              <ul className="space-y-1 max-h-[70vh] overflow-y-auto">
                {tocItems.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="toc-link">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="flex-1 min-w-0 space-y-16">
            {/* Mobile TOC */}
            <nav className="lg:hidden glass-card p-5">
              <h2 className="text-accent font-bold mb-4">Table of Contents</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {tocItems.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="toc-link text-xs">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* What is Teen Patti Room / 3 Patti Room */}
            <section id="what-is-teen-patti-room">
              <h2 className="section-heading">What is <span>3 Patti Room?</span></h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Teen Patti Room</strong> is a popular online Teen Patti (3 Patti) card game and earning app in Pakistan. Players download the APK, create an account, add money through JazzCash or EasyPaisa, join real-money tables, and withdraw winnings to their mobile wallet.
                </p>
                <p>
                  <strong className="text-white">3 Patti Room</strong> is the same platform — the official Teen Patti Room game with classic modes (Joker, Muflis, AK47), smooth graphics, fast gameplay, bonuses, and 24/7 customer support. It runs on Android and PC (via emulator) and is built for Pakistani players who want a simple way to play and earn online.
                </p>
              </div>
            </section>

            {/* What Makes Unique */}
            <section id="unique">
              <h2 className="section-heading">What Makes <span>3 Patti Room</span> Unique?</h2>
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Smooth Performance', text: 'This platform is designed with a simple layout, and even if you are new to the platform, you can easily understand it. You just need to download the game, register an account, find your favorite games, read the rules, and start playing without any worry. The deposit and withdrawal process is smooth, and you do not need any high skills to use this application.' },
                  { num: '02', title: 'Large Active Community', text: '3 Patti Room is a casino game app where you can join tables and start playing and betting with real players. This platform has a large community of players, which means you can always find new players and compete with them to earn more. This large community helps you play with real people and makes the games full of challenges.' },
                  { num: '03', title: 'Game Modes & Variations', text: '3 Patti Room Game not only offers classic Teen Patti games but also provides different modes to make the game more interesting.', list: ['Classic Teen Pati mode, which offers traditional Teen Patti games.', 'Joker mode, where one card acts as a joker, and you can use it to make your hand stronger.', 'Muflis mode, where the lowest hand wins.', 'AK47 mode, in which cards like A, K, 4, and 7 act as a joker.', 'Tournament mode, where you can compete and get bigger rewards.'] },
                  { num: '04', title: 'Fairplay Gaming Environment', text: '3 Patti Room offers a fair play gaming environment, so every player gets an equal chance of playing. In the Teen Patti Room Game, every player is given cards, which are distributed by a random card system generator. So, everyone gets an equal chance of winning according to their luck and the strategies.' },
                  { num: '05', title: 'Private Tables & VIP Rooms', text: 'One of the next things for 3 Patti Room on this platform is that you can make private tables with your friends. You can create a table, give links or code to your friends, and the people who have the code can join these tables. This makes the game more fun, and you feel like a real card game at home. VIP rooms are given to experienced players where they can join high-stakes tables to earn big money rewards.' },
                ].map(({ num, title, text, list }) => (
                  <div key={num} className="glass-card p-6 flex gap-4">
                    <span className="feature-number">{num}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                      <p className="text-gray-300 leading-relaxed">{text}</p>
                      {list && (
                        <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                          {list.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Gaming Features */}
            <section id="features">
              <h2 className="section-heading">Key <span>Gaming Features</span></h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Smooth Graphics', text: 'One of the best features of this application is that it has smooth and interactive graphics. When you are playing games, the interface looks attractive, and the app does not freeze or lag. These smooth graphics offer you the best gaming experience and optimized performance. You can see smooth animations, card files, a clean design, and a realistic effect that enhances the gameplay experience, and you do not feel bored while playing.' },
                  { title: 'Multiple Teen Patti Variations', text: 'Teen Patti Room offers a variety of game variations of Teen Patti games. When playing classic Teen Patti mode, the rules are simple, with modes like Joker mode, Muflis mode, tournament modes, and AK47 modes, making the gaming experience more exciting. All these modes have completely changed the rules, making it more challenging while playing. If you are a beginner, you can start with Classic Teen Patti mode and later on can switch to other modes. These multiple modes make the gaming experience more dynamic and entertaining, so you do not feel bored while playing on one platform.' },
                  { title: '24/7 Customer Support', text: '3Patti Room APK provides a reliable customer support team to help you whenever you need it. If you are having an issue, like deposit and withdrawal delays, account recovery issues, bonuses clarification, or any game technical problem, you can contact them and get help. You can contact the support team by using Email or the in-chat option. This game also has a separate FAQs section where common problems and their solutions are given.' },
                  { title: 'Bonuses & Rewards', text: 'This earning app has bonuses and reward systems to help you to play games for free. If you are new to the platform, you can get a welcome bonus to start your journey. You can use this bonus to play games without needing to add your own money. It also offers multiple rewards and promotions during special events and festivals. These rewards are limited by a high-rewards system, and you can get them to improve your earnings.' },
                  { title: 'Local Payment Options', text: '3 Patti Room supports local payment methods, which are easy and reliable in Pakistan. You can use JazzCash and EasyPaisa to add or withdraw your money. These options are easy to use and have a secure encryption system to ensure safe transactions. The local payment methods are easy to use, making the transaction system smooth and secure without any worry.' },
                  { title: 'In-Game Chat Options', text: '3 Patti Room has a great feature of in-game chat options, which is exciting and enjoyable. When you are playing games, you can chat with real players, send short messages, and use exciting emojis. If you are playing with friends, the chat options become more interesting and enjoyable. This feature makes the game more interesting, ensuring you come into contact with the large community.' },
                  { title: 'Practice Mode', text: 'This gaming app has a practice mode feature that means you can play games to practice without needing to bet. You can understand the games, betting structure, and card ranking without spending a single penny. Even if you are a regular player, you can use practice mode to play games. You can improve your gaming and decision-making skills by practicing different games.' },
                  { title: 'Regular Updates and Content Additions', text: 'The regular updates help you to give the best and lag-free experience of the games. The graphics are smoother, easy to design, and the smooth animation makes the games feel fresh and exciting. Updates may include bug fixes, new promotional events, and new games. The new themes are added, so when you are playing, you can get something new in the interface to avoid boredom.' },
                ].map(({ title, text }) => (
                  <div key={title} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Download */}
            <section id="how-to-download">
              <h2 className="section-heading">How to Download the Latest Version of the <span>3Patti Room?</span></h2>
              {[
                {
                  platform: 'For Android',
                  steps: [
                    <>Open your browser, and search for the Latest version <Link href={ROUTES.download} className="text-accent hover:text-accent-light font-medium">www.3PattiRoomapp.net.pk</Link>.</>,
                    'Make sure to visit a trusted site that is safe and secure.',
                    <>Go to the <Link href={ROUTES.download} className="text-accent hover:text-accent-light font-medium">3 Patti Room download page</Link>, locate the download button, and tap on it to start the process.</>,
                    'Wait until the file is downloaded and saved to your device.',
                    'Now, go to your phone settings > security and enable Installation from unknown sources.',
                    'Open your download manager and look for the 3 Patti Room download APK file.',
                    'Click on the downloaded file to start the installation and wait until it completes on your device.',
                    'Once the installation is completed, you can launch the app to start playing and earning money.',
                  ],
                },
                {
                  platform: 'For iOS',
                  comingSoon: true,
                  message:
                    '3 Patti Room is not yet launched for iOS devices (iPhone and iPad). The official iOS version is coming soon. Until then, download the app on Android or play on PC using an Android emulator.',
                },
                {
                  platform: 'For PC',
                  steps: [
                    'First, you need to download an Android Emulator to create an Android Setup on your PC.',
                    'You should install the emulators, like BlueStacks, LD Player, or Nox Player. Make sure to download it from the official website.',
                    'Open the emulator and sign in with your Google Account.',
                    <>Download the latest version of the 3 Patti Room app from our <Link href={ROUTES.download} className="text-accent hover:text-accent-light font-medium">trusted download page</Link>.</>,
                    'Tap on the Install APK option inside an emulator and allow unknown sources if asked.',
                    'Once the game is successfully installed, you can start exploring games to earn real cash.',
                  ],
                },
              ].map(({ platform, steps, comingSoon, message }) => (
                <div key={platform} className="glass-card p-6 mb-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">
                    {platform}
                    {comingSoon && (
                      <span className="ml-2 text-xs font-bold uppercase tracking-wide text-black bg-accent px-2 py-0.5 rounded-full align-middle">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  {comingSoon ? (
                    <p className="text-gray-300 leading-relaxed text-sm">{message}</p>
                  ) : (
                    <>
                      <p className="text-gray-400 mb-3 text-sm">Here is the step-by-step process to download the 3Patti Room application on your {platform.replace('For ', '')} device;</p>
                      <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                        {steps!.map((step, i) => <li key={i} className="leading-relaxed">{step}</li>)}
                      </ol>
                    </>
                  )}
                </div>
              ))}
              <div className="flex justify-center mt-8">
                <DownloadButton />
              </div>
            </section>

            {/* System Requirements */}
            <section id="system-requirements">
              <h2 className="section-heading">System <span>Requirements</span></h2>
              <div className="glass-card overflow-hidden">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>System</th>
                      <th>Android</th>
                      <th>IOS</th>
                      <th>PC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Operating System', 'Android 7.0+', 'Coming Soon', 'Windows 10 or 11'],
                      ['RAM', '2GB', '—', '4GB'],
                      ['Storage', '500MB', '—', '2GB'],
                      ['Internet', 'Stable 4G', '—', 'Strong 5G'],
                    ].map(([sys, android, ios, pc]) => (
                      <tr key={sys}>
                        <td className="font-medium text-white">{sys}</td>
                        <td>{android}</td>
                        <td>{ios}</td>
                        <td>{pc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Register & Login */}
            <section id="register-login">
              <h2 className="section-heading">How to create an Account on <span>3 Patti Room?</span></h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Registration Process</h3>
                  <p className="text-gray-400 mb-4 text-sm">Creating an account on 3Patti Room is very simple and only takes a few minutes. Follow these steps carefully to register an account;</p>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                    {['Open the 3Patti Room app on your device and make sure you are using the official app.', 'On the main screen, tap on the Play as Guest option to enter the game lobby.', 'Inside the game, go to the Profile section and bind your active mobile number or Email address.', 'After that, you will receive an OTP for the verification process.', 'Check your email inbox and enter the OTP correctly.', 'Now create a strong password with a mix of letters, numbers, and symbols.', 'Recheck all the details you entered and tap on the register.', 'The account is successfully created, and you can explore the different games.'].map((step, i) => (
                      <li key={i} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Log in Process</h3>
                  <p className="text-gray-400 mb-4 text-sm">If you already have an account, follow these steps to safely log in to your account;</p>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                    {['Open the official 3Patti Room application on your device.', 'On the main screen, tap on the Sign in or Log in button.', 'Enter your registered mobile number or Email address.', 'Type the password you used while registering your account.', 'If you have forgotten your password, use the forgot password option to create a new password.', 'Double-check all your login details and tap on the login button.', 'Now, your account is logged in to start playing different games and earn money.'].map((step, i) => (
                      <li key={i} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* How to Add Money */}
            <section id="how-to-add-money">
              <h2 className="section-heading">How to Add Money in <span>3 Patti Room?</span></h2>
              <div className="glass-card p-6">
                <p className="text-gray-400 mb-4 text-sm">
                  To play real cash games on Teen Patti Room, you need to deposit (add money) to your wallet using JazzCash or EasyPaisa.{" "}
                  <Link href={ROUTES.deposit} className="text-accent hover:text-accent-light font-medium">
                    Read the full deposit guide →
                  </Link>
                </p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                  {DEPOSIT_STEPS.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* How to Withdraw */}
            <section id="how-to-withdraw">
              <h2 className="section-heading">How to Withdraw Money from <span>3 Patti Room?</span></h2>
              <div className="glass-card p-6">
                <p className="text-gray-400 mb-4 text-sm">
                  Cash out your Teen Patti Room winnings to JazzCash or EasyPaisa using the steps below.{" "}
                  <Link href={ROUTES.withdraw} className="text-accent hover:text-accent-light font-medium">
                    Read the full withdrawal guide →
                  </Link>
                </p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                  {WITHDRAW_STEPS.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Bonuses */}
            <section id="bonuses">
              <h2 className="section-heading">3Patti Room <span>Bonuses and Promotions</span></h2>
              <p className="text-gray-300 mb-6">3Patti Room APK offers different bonuses and promotions to its users, whether you are a new or regular player.</p>
              <div className="space-y-4">
                {[
                  { num: '01', title: 'Welcome Bonus', text: 'If you are a new user on 3 Patti Room, you can receive a welcome bonus. It can be free chips, cash balance, or rewards that are directly added to your game wallet. This welcome bonus helps beginners to start playing without needing to spend their own money.' },
                  { num: '02', title: '111 Bonus', text: 'The 111 bonus is one of the special promotional rewards given to both new and regular players. This bonus is added to give extra chips depending on your activity. It is not permanent, so you can check in-app promotions for current offers.' },
                  { num: '03', title: 'Recharge Rebate', text: '3 Patti Room offers recharge rate bonuses to new users. When you make a recharge to your game wallet, a percentage of the amount is given back as a bonus chip. The percentage depends on how much you have deposited. This encourages you to recharge and play constantly and win big rewards.' },
                  { num: '04', title: 'Weekly Agent Bonus', text: 'The weekly agent bonus is given when you invite a referral to the game using your unique code. If you have an active referral who deposits and plays games regularly, the game gives a small amount of commission to your wallet. You can check your active referral and track their activity.' },
                  { num: '05', title: 'Cashback Bonuses', text: 'Cashback bonuses are given to reduce the risk of more losses. When you play games and lose chips constantly, cashback bonuses help you return as a bonus chip. This bonus helps you recover your losses, so you can play games with full confidence.' },
                  { num: '06', title: 'Referral Bonus Program', text: '3 Patti Room provides a referral bonus system, which allows you to earn rewards without even staying active or playing games. You can get your unique code or link, which you can copy and share with your friends. When someone joins the platform using your code, you can get a fixed amount of commission.' },
                ].map(({ num, title, text }) => (
                  <div key={num} className="glass-card p-5 flex gap-4">
                    <span className="feature-number">{num}</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular in Pakistan */}
            <section id="popular-pakistan">
              <h2 className="section-heading">Why is 3 Patti Room Popular in <span>Pakistan?</span></h2>
              <p className="text-gray-300 mb-4">3 Patti Room is the most popular online gaming platform in Pakistan. Many players choose Teen Patti Room as an earning app due to the following reasons.</p>
              <ul className="space-y-3 text-gray-300 list-disc list-inside glass-card p-6">
                {['This earning app not only offers one game, but you can play multiple games according to your interests.', 'Multiple beginner-friendly games are easy and depend on luck, like Dragon vs Tiger, Roulette, Poker, and slot games.', 'The platform uses local payment methods for Pakistani users, such as Jazzcash and EasyPaisa.', 'Daily rewards and bonuses are given to maximize your earnings, which makes it trending among casino lovers.', 'You do not need high-speed internet to use this app, and this feature makes it useful for everyone to play games smoothly.'].map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Customer Support */}
            <section id="customer-support">
              <h2 className="section-heading">Customer Support of <span>3 Patti Room</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Live Chat Support', text: 'This is the easiest and fastest way to contact the support team. You can directly chat through the official platform. Open the app and look for the Help or Support section, and click on it. You can use this method for instant communication and issues, like deposit and withdrawal delays, or any technical game problems.' },
                  { title: 'Email Support', text: '3 Patti Room provides an official email, so you can write your issues and get help. Go to the official website and find the Email address. Compose an Email and describe your issues clearly, and add screenshots if required. The Email support may take time, but it is reliable to use.' },
                  { title: 'FAQs Section', text: 'The Game has a section where common problems and their solutions are given. If you are facing any problem, go to the FAQs section instead of contacting the team. This saves time, and you can get solutions without wasting your time.' },
                ].map(({ title, text }) => (
                  <div key={title} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsible Gaming */}
            <section id="responsible-gaming">
              <h2 className="section-heading">Responsible Gaming Tips that <span>You Should Follow</span></h2>
              <p className="text-gray-300 mb-4">Online gaming is fun, but also lead to stress if you do not play responsibly. Here are some responsible gaming tips you can follow while playing on Teen Patti Room</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside glass-card p-6">
                {['First, make sure you are using the official app of 3 Patti Room.', 'Avoid clicking on random links claiming free chips and bonuses.', 'Avoid playing when you feel angry or any emotional stress.', 'Treat the games as entertainment, not a guaranteed income source.', 'Do not share your login information with friends.', 'Take regular breaks while playing for longer sessions.'].map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Smart Tips */}
            <section id="smart-tips">
              <h2 className="section-heading">Smart Tips to Earn Maximum on <span>3 Patti Room</span></h2>
              <p className="text-gray-300 mb-4">Here are some smart tips you can follow to earn maximum on the 3Patti Room Game</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside glass-card p-6">
                {['If you are a beginner, start with the games that have a low betting amount.', 'Choose the games that are easy and according to your interests', 'Do not chase losses and try to recover your losses by getting a higher amount.', 'Take advantage of daily rewards, cashbacks, and promotional offers.', 'Observe your opponents before playing high bets.'].map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Pros & Cons */}
            <section id="pros-cons">
              <h2 className="section-heading">Pros & <span>Cons</span></h2>
              <div className="pros-cons-grid">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-emerald-glow mb-4">Pros</h3>
                  <ul className="pros-list space-y-2 text-gray-300 list-disc list-inside">
                    {['Variety of exciting games', 'Real Earning Opportunities', 'Tournament and Special Events', 'Regular updates', '24/7 Customer support'].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">Cons</h3>
                  <ul className="cons-list space-y-2 text-gray-300 list-disc list-inside">
                    {['Need an internet connection', 'Third-party application', 'There is no legal support', 'Gaming can be addictive', 'Risk of losing money'].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="section-heading"><span>Conclusion</span></h2>
              <div className="glass-card p-6">
                <p className="text-gray-300 leading-relaxed">Teen Patti Room has gained massive popularity due to its ease of use and earning opportunities. The platform offers a variety of games to play and earn without any worry. When you are playing on this platform, you do not feel bored. This earning app is lightweight and needs a stable internet connection for smooth performance. Teen Patti Room regularly updates the game to add new features, making it the best gaming platform. You can get different rewards, bonuses, and free chips to play games without spending your own money.</p>
              </div>
              <div className="flex justify-center mt-8">
                <DownloadButton />
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="section-heading">Frequently Asked <span>Question</span></h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="faq-item">
                    <h3 className="font-semibold text-white mb-2">{q}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
