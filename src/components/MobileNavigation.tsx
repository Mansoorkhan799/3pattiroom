'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_NAME, DOWNLOAD_URL, APP_VERSION, APP_SIZE } from '@/lib/site';
import { IMAGES } from '@/lib/images';
import { ROUTES } from '@/lib/routes';

type MenuItem = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const iconClass = 'w-5 h-5 shrink-0';

const icons = {
  home: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  register: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  ),
  login: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
  ),
  download: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  deposit: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  withdraw: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  pc: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  blog: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  about: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  contact: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  privacy: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  disclaimer: (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  chevron: (
    <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
};

const MENU_SECTIONS: MenuSection[] = [
  {
    title: 'Main',
    items: [
      { href: ROUTES.home, label: 'Home', icon: icons.home },
      { href: ROUTES.register, label: 'Register', icon: icons.register },
      { href: ROUTES.login, label: 'Login', icon: icons.login },
    ],
  },
  {
    title: 'Guides',
    items: [
      { href: ROUTES.download, label: 'Download', icon: icons.download },
      { href: ROUTES.deposit, label: 'Deposit Money', icon: icons.deposit },
      { href: ROUTES.withdraw, label: 'Withdraw Money', icon: icons.withdraw },
      { href: ROUTES.pc, label: 'PC Version', icon: icons.pc },
      { href: ROUTES.blog, label: 'Blog', icon: icons.blog },
    ],
  },
  {
    title: 'Info',
    items: [
      { href: '/#introduction', label: 'About', icon: icons.about },
      { href: '/#customer-support', label: 'Contact', icon: icons.contact },
      { href: '/#faq', label: 'Privacy Policy', icon: icons.privacy },
      { href: '/#responsible-gaming', label: 'Disclaimer', icon: icons.disclaimer },
    ],
  },
];

function MenuLink({
  item,
  isActive,
  onNavigate,
}: {
  item: MenuItem;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const className = `mobile-menu-link${isActive ? ' mobile-menu-link-active' : ''}`;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onNavigate}>
        {item.icon}
        <span className="flex-1">{item.label}</span>
        {icons.chevron}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {item.icon}
      <span className="flex-1">{item.label}</span>
      {icons.chevron}
    </Link>
  );
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const drawer = isOpen ? (
    <div className="mobile-menu-root" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button type="button" className="mobile-menu-backdrop" onClick={closeMenu} aria-label="Close menu" />
      <div className="mobile-menu-panel">
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-menu-brand" onClick={closeMenu}>
            <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-accent/40">
              <Image src={IMAGES.app} alt="" fill sizes="40px" className="object-cover" priority />
            </div>
            <span className="text-white font-bold text-lg">{SITE_NAME}</span>
          </Link>
          <button type="button" onClick={closeMenu} className="mobile-menu-close" aria-label="Close menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {MENU_SECTIONS.map((section) => (
            <div key={section.title} className="mobile-menu-section">
              <p className="mobile-menu-section-title">{section.title}</p>
              <ul className="mobile-menu-list">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <MenuLink item={item} isActive={isActive(item.href)} onNavigate={closeMenu} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="download-btn mobile-menu-download group"
          >
            <span>Download Free APK</span>
            <div className="download-icon" aria-hidden="true">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
          <p className="mobile-menu-meta">
            {APP_SIZE} · Android 5.0+ · {APP_VERSION} (2026 Update)
          </p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={isOpen ? closeMenu : openMenu}
        className="mobile-menu-toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {mounted && drawer ? createPortal(drawer, document.body) : null}
    </div>
  );
}
