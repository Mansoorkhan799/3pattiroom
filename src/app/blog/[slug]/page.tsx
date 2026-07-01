import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { BLOG_ARTICLE_CONTENT, BlogArticleBody } from "@/lib/blog-content";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const content = BLOG_ARTICLE_CONTENT[slug];

  if (!post || !content) notFound();

  return (
    <BlogArticleLayout post={post} articleBody={content.articleBody}>
      <BlogArticleBody slug={slug} />
    </BlogArticleLayout>
  );
}
