import { NextResponse } from 'next/server';
import { SITE_ORIGIN } from '@/lib/site';
import { ROUTES } from '@/lib/routes';
import { BLOG_POSTS } from '@/lib/blog';
import { IMAGES } from '@/lib/images';

export async function GET() {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: ROUTES.download, priority: '0.9', changefreq: 'weekly' },
    { url: ROUTES.deposit, priority: '0.9', changefreq: 'weekly' },
    { url: ROUTES.withdraw, priority: '0.9', changefreq: 'weekly' },
    { url: ROUTES.register, priority: '0.8', changefreq: 'monthly' },
    { url: ROUTES.login, priority: '0.8', changefreq: 'monthly' },
    { url: ROUTES.pc, priority: '0.9', changefreq: 'weekly' },
    { url: ROUTES.blog, priority: '0.8', changefreq: 'weekly' },
    ...BLOG_POSTS.map((post) => ({
      url: `${ROUTES.blog}/${post.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
  ];

  const lastmod = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${SITE_ORIGIN}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.url === '/' ? `
    <image:image>
      <image:loc>${SITE_ORIGIN}${IMAGES.app}</image:loc>
      <image:title>3 Patti Room</image:title>
    </image:image>` : ''}
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
