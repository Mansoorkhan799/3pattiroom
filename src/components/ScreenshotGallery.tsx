import Image from 'next/image';
import { SCREENSHOTS, SCREENSHOT_SIZE } from '@/lib/images';

export default function ScreenshotGallery() {
  return (
    <section id="app-screenshots" className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-8">
        3 Patti Room App Screenshots
      </h2>
      <div className="screenshot-grid">
        {SCREENSHOTS.map(({ src, label, alt }) => (
          <div key={label} className="screenshot-card">
            <div className="screenshot-image-wrap">
              <Image
                src={src}
                alt={alt}
                width={SCREENSHOT_SIZE.width}
                height={SCREENSHOT_SIZE.height}
                className="screenshot-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="screenshot-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
