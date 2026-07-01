import { SITE_ORIGIN, SITE_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_ORIGIN}${path === "/" ? "" : path}`;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function howToSchema({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  steps: string[];
  url: string;
}) {
  return {
    "@type": "HowTo",
    name,
    description,
    url,
    inLanguage: "en-US",
    step: steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: text.length > 80 ? `${text.slice(0, 77)}...` : text,
      text,
    })),
  };
}

export function webPageSchema({
  url,
  name,
  description,
  pageId,
}: {
  url: string;
  name: string;
  description: string;
  pageId?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": pageId ?? url,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    inLanguage: "en-US",
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export const organizationRef = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_ORIGIN}${IMAGES.app}`,
    ...imageObjectLicensing,
  },
};

export function blogPostingSchema({
  title,
  description,
  datePublished,
  articleBody,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  articleBody: string;
  url: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    image: {
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}${IMAGES.app}`,
      ...imageObjectLicensing,
    },
    datePublished,
    dateModified: datePublished,
    author: organizationRef,
    publisher: organizationRef,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleBody,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: `${SITE_NAME} Blog`,
      url: `${SITE_ORIGIN}/blog`,
    },
  };
}

export function collectionPageSchema({
  url,
  name,
  description,
  items,
}: {
  url: string;
  name: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@type": "CollectionPage",
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function buildSchemaGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
