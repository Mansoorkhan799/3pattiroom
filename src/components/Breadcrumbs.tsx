import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="breadcrumbs-item">
              {isLast ? (
                <span aria-current="page" className="breadcrumbs-current">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="breadcrumbs-link">
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span className="breadcrumbs-separator" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
