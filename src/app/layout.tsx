import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { IMAGES, APP_ICON_SIZE } from "@/lib/images";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "3 Patti Room Game Download APK – Pakistani Earning App 2026",
    template: `%s | ${SITE_NAME}`
  },
  description: "Teen Patti Room is a popular online card game that allows you to enjoy a wide variety of games with its smooth graphics, easy control, and fast gameplay. Download 3 Patti Room APK.",
  keywords: [
    "3 Patti Room",
    "Teen Patti Room",
    "3 Patti Room download",
    "3 Patti Room APK",
    "Teen Patti Room app",
    "Pakistani earning app",
    "Teen Patti game Pakistan",
    "3Patti Room",
    "online card game Pakistan",
    "JazzCash gaming",
    "EasyPaisa gaming",
  ],
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: IMAGES.app, type: 'image/webp', sizes: '192x192' },
      { url: IMAGES.app, type: 'image/webp', sizes: '1000x1000' }
    ],
    apple: [
      { url: IMAGES.app, sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "3 Patti Room Game Download APK – Pakistani Earning App 2026",
    description: "Teen Patti Room is a popular online card game with smooth graphics, easy control, and fast gameplay. Download 3 Patti Room APK.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.app}`,
        width: APP_ICON_SIZE.width,
        height: APP_ICON_SIZE.height,
        alt: "3 Patti Room - Teen Patti Room Game",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Room Game Download APK – Pakistani Earning App 2026",
    description: "Teen Patti Room is a popular online card game with smooth graphics, easy control, and fast gameplay.",
    images: [`${SITE_ORIGIN}${IMAGES.app}`],
  },
  applicationName: SITE_NAME,
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={IMAGES.app} type="image/webp" sizes="192x192" />
        <link rel="apple-touch-icon" href={IMAGES.app} sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(107, 18, 32, 0.45), transparent), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(139, 0, 0, 0.2), transparent), radial-gradient(ellipse 40% 30% at 10% 60%, rgba(255, 193, 7, 0.05), transparent)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-40"></div>
        <Header />
        <main className="relative z-10 flex-1">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SITE_NAME,
              "url": SITE_ORIGIN,
              "logo": `${SITE_ORIGIN}${IMAGES.app}`,
              "description": "Teen Patti Room is a popular online card game with smooth graphics, easy control, and fast gameplay.",
            })
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": SITE_NAME,
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
