import Image from "next/image";
import DownloadButton from "./DownloadButton";
import Breadcrumbs from "./Breadcrumbs";
import BrandText from "./BrandText";
import { SCREENSHOT_SIZE } from "@/lib/images";
import type { BreadcrumbItem } from "@/lib/schema";

interface PageHeroProps {
  title: string;
  description: string;
  showDownload?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, description, showDownload = true, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative py-10 md:py-14 px-4 md:px-8 bg-hero-glow border-b border-dark-red/40">
      <div className="max-w-4xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6 md:mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <BrandText text={description} />
          </p>
          {showDownload && (
            <div className="flex justify-center pt-2">
              <DownloadButton />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface GuideImageProps {
  src: string;
  alt: string;
}

export function GuideImage({ src, alt }: GuideImageProps) {
  return (
    <div className="screenshot-card overflow-hidden my-8">
      <div className="screenshot-image-wrap">
        <Image src={src} alt={alt} width={SCREENSHOT_SIZE.width} height={SCREENSHOT_SIZE.height} className="screenshot-image" />
      </div>
    </div>
  );
}

interface StepListProps {
  title?: string;
  intro?: string;
  steps: string[];
}

export function StepList({ title, intro, steps }: StepListProps) {
  return (
    <div className="glass-card p-6 mb-6">
      {title && <h2 className="text-xl font-semibold text-accent mb-4">{title}</h2>}
      {intro && <p className="text-gray-400 mb-4 text-sm leading-relaxed">{intro}</p>}
      <ol className="space-y-2 text-gray-300 list-decimal list-inside">
        {steps.map((step, i) => (
          <li key={i} className="leading-relaxed text-sm md:text-base">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function GuideContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-6">
      {children}
    </div>
  );
}
