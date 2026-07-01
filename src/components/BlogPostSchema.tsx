import JsonLd from "@/components/JsonLd";
import { ROUTES } from "@/lib/routes";
import {
  absoluteUrl,
  blogPostingSchema,
  breadcrumbSchema,
  buildSchemaGraph,
  howToSchema,
  webPageSchema,
} from "@/lib/schema";
import type { BlogPost } from "@/lib/blog";

type BlogPostSchemaProps = {
  post: BlogPost;
  articleBody: string;
};

export default function BlogPostSchema({ post, articleBody }: BlogPostSchemaProps) {
  const url = absoluteUrl(`${ROUTES.blog}/${post.slug}`);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: ROUTES.home },
    { name: "Blog", path: ROUTES.blog },
    { name: post.title, path: `${ROUTES.blog}/${post.slug}` },
  ]);

  const schema = buildSchemaGraph(
    breadcrumbs,
    webPageSchema({
      url,
      name: post.title,
      description: post.description,
      pageId: `${url}#webpage`,
    }),
    blogPostingSchema({
      title: post.title,
      description: post.description,
      datePublished: post.datePublished,
      articleBody,
      url,
    }),
    howToSchema({
      name: post.title,
      description: post.description,
      steps: post.howToSteps,
      url,
    })
  );

  return <JsonLd id={`blog-schema-${post.slug}`} data={schema} />;
}
