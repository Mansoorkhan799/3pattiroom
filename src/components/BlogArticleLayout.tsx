import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { BlogPost } from "@/lib/blog";
import { ROUTES } from "@/lib/routes";
import { getRelatedPosts } from "@/lib/internal-links";

interface BlogArticleLayoutProps {
  post: BlogPost;
  articleBody: string;
  children: React.ReactNode;
}

export default function BlogArticleLayout({ post, articleBody, children }: BlogArticleLayoutProps) {
  const related = getRelatedPosts(post.slug);

  return (
    <>
      <BlogPostSchema post={post} articleBody={articleBody} />
      <article>
        <header className="relative py-10 md:py-14 px-4 md:px-8 bg-hero-glow border-b border-dark-red/40">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { name: "Home", path: ROUTES.home },
                { name: "Blog", path: ROUTES.blog },
                {
                  name: post.title.length > 40 ? post.title.slice(0, 40).trimEnd() + "…" : post.title,
                  path: `${ROUTES.blog}/${post.slug}`,
                },
              ]}
            />
            <p className="text-accent text-sm font-medium mt-5 mb-2">
              {post.category} · {post.readTime} · {post.datePublished}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{post.description}</p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
          <div className="prose-blog space-y-6 text-gray-300 leading-relaxed">{children}</div>

          {related.length > 0 && (
            <aside className="mt-12 glass-card p-6" aria-label="Related articles">
              <h2 className="text-lg font-semibold text-accent mb-4">Related Articles</h2>
              <ul className="space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${ROUTES.blog}/${item.slug}`}
                      className="text-gray-300 hover:text-accent transition-colors text-sm leading-relaxed"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>
    </>
  );
}
