import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const BRAND_MARKERS = ["Teen Patti Room", "3 Patti Room"] as const;

/** Link the first brand mention in text to the homepage */
export default function BrandText({ text }: { text: string }) {
  let earliest = -1;
  let marker: (typeof BRAND_MARKERS)[number] | null = null;

  for (const name of BRAND_MARKERS) {
    const index = text.indexOf(name);
    if (index !== -1 && (earliest === -1 || index < earliest)) {
      earliest = index;
      marker = name;
    }
  }

  if (marker === null || earliest === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, earliest)}
      <Link href={ROUTES.home} className="text-accent hover:text-accent-light font-medium">
        {marker}
      </Link>
      {text.slice(earliest + marker.length)}
    </>
  );
}
