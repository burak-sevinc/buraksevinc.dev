import React, { Suspense } from "react";
import Navbar from "./navbar/navbar";
import Head from "next/head";

const Footer = React.lazy(() => import("./footer"));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Burak Sevinç</title>
      </Head>
      <div className="pt-12 mx-auto min-h-screen max-w-2xl md:px-0 px-8">
        <Navbar />
        <div>{children}</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
