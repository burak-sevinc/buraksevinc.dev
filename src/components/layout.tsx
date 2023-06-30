import React from "react";
import Navbar from "./navbar/navbar";
import Head from "next/head";
import dynamic from "next/dynamic";
import SkeletonFooter from "./footer/skeletonFooter";

const Footer = dynamic(() => import("./footer"), {
  loading: () => <SkeletonFooter />,
  ssr: false,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Burak Sevinç</title>
      </Head>
      <div className="pt-12 mx-auto md:px-0 px-8 min-h-screen max-w-full bg-gray-100 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto">
        <Navbar />
          {children}</div>
        <Footer />
      </div>
    </>
  );
}
