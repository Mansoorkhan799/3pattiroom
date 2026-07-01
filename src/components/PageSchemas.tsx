import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { BreadcrumbItem } from "@/lib/schema";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildSchemaGraph,
  howToSchema,
  webPageSchema,
} from "@/lib/schema";

type PageSchemasProps = {
  breadcrumbs: BreadcrumbItem[];
  page: {
    path: string;
    title: string;
    description: string;
  };
  howTo?: {
    name: string;
    description: string;
    steps: string[];
  };
  id: string;
};

export default function PageSchemas({ breadcrumbs, page, howTo, id }: PageSchemasProps) {
  const url = absoluteUrl(page.path);
  const nodes: Record<string, unknown>[] = [
    breadcrumbSchema(breadcrumbs),
    webPageSchema({
      url,
      name: page.title,
      description: page.description,
      pageId: `${url}#webpage`,
    }),
  ];

  if (howTo) {
    nodes.push(
      howToSchema({
        name: howTo.name,
        description: howTo.description,
        steps: howTo.steps,
        url,
      })
    );
  }

  return <JsonLd id={id} data={buildSchemaGraph(...nodes)} />;
}

export function InlineGuideLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-accent hover:text-accent-light font-medium">
      {children}
    </Link>
  );
}
