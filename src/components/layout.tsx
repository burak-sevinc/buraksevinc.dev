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
      <div className="pt-12 mx-auto md:px-0 px-8 min-h-screen max-w-2xl bg-gray-100 dark:bg-[#161616] drop-shadow-lg dark:drop-shadow-[0px_35px_35px_rgba(71,27,173,0.5)] border-x border-slate-300 dark:border-zinc-700">
        <Navbar />
        <div className="max-w-xl mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
}
