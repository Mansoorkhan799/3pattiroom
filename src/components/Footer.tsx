import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BrandText from '@/components/BrandText';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/site';
import { FOOTER_GUIDE_LINKS, FOOTER_INFO_LINKS } from '@/lib/routes';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 px-4 md:px-8 border-t border-dark-red/50 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">{SITE_NAME}</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              <BrandText text="Teen Patti Room is a popular online card game that allows you to enjoy a wide variety of games with its smooth graphics, easy control, and fast gameplay." />
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {FOOTER_GUIDE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Information</h2>
            <ul className="space-y-2 text-sm">
              {FOOTER_INFO_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-400 mb-4">
              Click on the given download button to download this game.
            </p>
            <DownloadButton size="small" className="!text-xs" />
          </div>
        </div>

        <div className="border-t border-dark-red/40 mt-10 pt-6 text-center text-sm text-gray-500">
          <p className="mb-2">
            <Link href="/about-us" className="hover:text-accent transition-colors mx-2">About Us</Link>
            <span className="text-gray-700">|</span>
            <Link href="/contact-us" className="hover:text-accent transition-colors mx-2">Contact Us</Link>
            <span className="text-gray-700">|</span>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors mx-2">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="hover:text-accent transition-colors mx-2">Disclaimer</Link>
          </p>
          <p>© 2026 {SITE_NAME}. All rights reserved. | <Link href="/" className="hover:text-accent transition-colors">{SITE_DOMAIN}</Link></p>
        </div>
      </div>
    </footer>
  );
}
