import "src/styles/globals.css";

import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

// eslint-disable-next-line react/destructuring-assignment
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <NextSeo
        title="Gabutech"
        description="ガブリエルの自己紹介・ブログ・プロダクト紹介のまとめサイト"
        openGraph={{
          url: `https://gabutech.vercel.app/`,
          images: [{ url: "/img/logo.png", alt: "Gabutech" }],
        }}
        twitter={{
          handle: "@gabu_ITengineer",
          site: "https://gabutech.vercel.app/",
          cardType: "summary",
        }}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
