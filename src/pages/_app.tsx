import cx from "clsx";
import type { AppProps } from "next/app";
import "~/styles/globals.css";

import { Inter } from "@next/font/google";
import { DefaultSeo } from "next-seo";
import { seo } from "~/config/seo";

const inter = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <main className={cx("font-sans", inter.variable)}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
