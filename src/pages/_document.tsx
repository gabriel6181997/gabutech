import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
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
        <Head />
        <body className="h-screen md:h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
