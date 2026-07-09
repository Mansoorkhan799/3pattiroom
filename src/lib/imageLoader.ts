/** Serve local /public images at their canonical URLs for Google Image indexing. */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  return src;
}
