import { NextResponse } from 'next/server';
import { generateSitemapIndexXml, SITEMAP_XML_HEADERS } from '@/lib/sitemaps';

export async function GET() {
  return new NextResponse(generateSitemapIndexXml(), { headers: SITEMAP_XML_HEADERS });
}
