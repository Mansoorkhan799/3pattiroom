import { SITE_ORIGIN } from '@/lib/site';
import { ROUTES } from '@/lib/routes';
import { BLOG_POSTS } from '@/lib/blog';
import { SITEMAP_IMAGES } from '@/lib/images';

type SitemapPage = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod: string;
};

const STATIC_LASTMOD = '2026-07-02';

const STATIC_PAGES: Omit<SitemapPage, 'lastmod'>[] = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: ROUTES.download, priority: '0.9', changefreq: 'weekly' },
  { path: ROUTES.deposit, priority: '0.9', changefreq: 'weekly' },
  { path: ROUTES.withdraw, priority: '0.9', changefreq: 'weekly' },
  { path: ROUTES.register, priority: '0.8', changefreq: 'monthly' },
  { path: ROUTES.login, priority: '0.8', changefreq: 'monthly' },
  { path: ROUTES.pc, priority: '0.9', changefreq: 'weekly' },
  { path: ROUTES.blog, priority: '0.8', changefreq: 'weekly' },
  { path: ROUTES.about, priority: '0.4', changefreq: 'yearly' },
  { path: ROUTES.contact, priority: '0.4', changefreq: 'yearly' },
  { path: ROUTES.privacy, priority: '0.3', changefreq: 'yearly' },
  { path: ROUTES.disclaimer, priority: '0.3', changefreq: 'yearly' },
];

function getSitemapPages(): SitemapPage[] {
  return [
    ...STATIC_PAGES.map((page) => ({ ...page, lastmod: STATIC_LASTMOD })),
    ...BLOG_POSTS.map((post) => ({
      path: `${ROUTES.blog}/${post.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: post.datePublished,
    })),
  ];
}

export const SITEMAP_XML_HEADERS = {
  'Content-Type': 'application/xml',
  'Cache-Control': 'public, max-age=3600, s-maxage=86400',
} as const;

export function generateSitemapXml(): string {
  const pages = getSitemapPages();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_ORIGIN}${page.path === '/' ? '' : page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export function generateImageSitemapXml(): string {
  const imageEntries = SITEMAP_IMAGES.map(
    (image) => `    <image:image>
      <image:loc>${SITE_ORIGIN}${image.src}</image:loc>
      <image:title>${image.title}</image:title>${image.caption ? `
      <image:caption>${image.caption}</image:caption>` : ''}
    </image:image>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_ORIGIN}/</loc>
${imageEntries}
  </url>
</urlset>`;
}

export function generateSitemapIndexXml(): string {
  const lastmod = new Date().toISOString().slice(0, 10);

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/image-sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
}
