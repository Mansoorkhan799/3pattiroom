import { NextResponse } from 'next/server';
import { generateImageSitemapXml, SITEMAP_XML_HEADERS } from '@/lib/sitemaps';

export async function GET() {
  return new NextResponse(generateImageSitemapXml(), { headers: SITEMAP_XML_HEADERS });
}
