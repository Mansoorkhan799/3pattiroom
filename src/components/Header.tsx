'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import DownloadButton from './DownloadButton';
import { SITE_NAME } from '@/lib/site';
import { IMAGES } from '@/lib/images';
import { NAV_LINKS } from '@/lib/routes';

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-primary/95 backdrop-blur-md py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-dark-red/50 shadow-lg shadow-black/40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-10 mr-3 ring-2 ring-accent/30 rounded-xl overflow-hidden group-hover:ring-accent/60 transition-all">
            <Image
              src={IMAGES.app}
              alt="3 Patti Room Logo"
              width={40}
              height={40}
              className="object-contain"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-0.5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium transition-colors px-2 py-2 rounded-lg text-xs xl:text-sm xl:px-3 ${
                isActive(href)
                  ? 'text-accent bg-surface/60'
                  : 'text-gray-300 hover:text-accent hover:bg-surface/50'
              }`}
            >
              {label}
            </Link>
          ))}
          <DownloadButton size="small" label="Download APK" showIcon={false} className="ml-2" />
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
