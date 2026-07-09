import { NextResponse } from 'next/server';
import { generateSitemapXml, SITEMAP_XML_HEADERS } from '@/lib/sitemaps';

export async function GET() {
  return new NextResponse(generateSitemapXml(), { headers: SITEMAP_XML_HEADERS });
}
