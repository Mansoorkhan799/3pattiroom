/** Site origin for absolute schema URLs */
export { SITE_ORIGIN } from "./site";

import { SITE_ORIGIN, SITE_NAME } from "./site";

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: SITE_ORIGIN,
  copyrightNotice: `© ${SITE_NAME}. All rights reserved.`,
  creditText: SITE_NAME,
} as const;
