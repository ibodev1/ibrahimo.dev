import { SITE_TITLE } from "../social.ts";
import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Ibrahim Odev - Software Developer." />
        <meta name="author" content="Ibrahim Odev" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* Open Graph */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content="Software Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibrahimo.dev" />
        <meta property="og:image" content="https://ibrahimo.dev/pp.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ibodev1" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content="Software Developer" />
        <meta name="twitter:image" content="https://ibrahimo.dev/pp.jpg" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        />
        <title>{SITE_TITLE}</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
