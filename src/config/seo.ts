import type { DefaultSeoProps } from "next-seo";

const title = `Trésor Muco`;
const description = `Welcome to my digital space where I share what I'm learning about web development.`;
const domain = `mucotresor.com`;
const twitter = `@mucotreso`;
const meta = `Developer Advocate at Leapa`;

export const seo: DefaultSeoProps = {
  title: title + " | " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    /*
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],*/
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
};
