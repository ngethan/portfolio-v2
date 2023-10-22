import Document, { Head, Html, Main, NextScript } from "next/document";

import { GOOGLE_TAG_MANAGER_ID } from "@/lib/GoogleTagManager";
import { AppConfig } from "@/utils/AppConfig";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              title="googleTagManagerNoScript"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
