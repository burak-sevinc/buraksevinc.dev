import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="h-screen w-full dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
