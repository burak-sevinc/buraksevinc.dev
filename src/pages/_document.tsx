import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="smooth-scroll">
      <Head />
      <body className="smooth-scroll mx-auto min-h-screen max-w-3xl md:px-0 px-8 dark:bg-[#161616]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
