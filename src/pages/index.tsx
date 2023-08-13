import About from "@/components/home/about/about";
import React from "react";
import Hello from "@/components/home/hello";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Loading = () => <>Loading...</>;

const ScrollDown = dynamic(() => import("@/components/home/scrollDown"), {
  loading: () => <Loading />,
  ssr: false,
});
const Skills = dynamic(() => import("@/components/home/about/skills"), {
  loading: () => <Loading />,
  ssr: false,
});
const JobSection = dynamic(() => import("@/components/home/about/jobSection"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NextSeo
        title="Burak Sevinc - Full Stack Developer"
        description="As a full stack developer with a passion for React, Next.js, and Laravel, I delight in crafting responsive and user-friendly interfaces that breathe life into concepts."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.buraksevinc.dev/",
          title: "Burak Sevinç - Frontend Web Developer",
          description:
            "As a full stack developer with a passion for React, Next.js, and Laravel, I delight in crafting responsive and user-friendly interfaces that breathe life into concepts.",
          images: [
            {
              url: "https://www.buraksevinc.dev/me.png",
              width: 800,
              height: 600,
              alt: "Photo of Burak Sevinc",
              type: "image/jpeg",
            },
          ],
          siteName: "Burak Sevinç",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col">
        <Hello />
        <hr className="my-12" />
        <div className="flex justify-center">
          <ScrollDown />
        </div>
        <div className="flex flex-col gap-8">
          <About />
          <Skills />
          <JobSection />
        </div>
      </div>
    </>
  );
}
