import type { DocumentContext} from "next/document";
import Document, {Head, Html, Main, NextScript } from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
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
