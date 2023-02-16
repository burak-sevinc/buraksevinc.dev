import React from "react";
import Footer from "./footer";
import Navbar from "./navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-12 mx-auto min-h-screen max-w-3xl md:px-0 px-8">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
}
