import About from "@/components/home/about/about";
import React, { Suspense } from "react";
import Hello from "@/components/home/hello";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const ScrollDown = dynamic(() => import("@/components/home/scrollDown"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/home/about/skills"), {
  ssr: false,
});
const JobSection = dynamic(() => import("@/components/home/about/jobSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NextSeo
        title="Burak Sevinc - Frontend Web Developer"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://buraksevinc-dev.vercel.app/",
          title: "Burak Sevinç - Frontend Web Developer",
          description:
            "As a frontend developer with a passion for React and Next.js, I enjoy creating responsive and intuitive user interfaces that bring ideas to life.",
          images: [
            {
              url: "https://buraksevinc-dev.vercel.app/img/test-img.jpg",
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
        <Suspense fallback={<p>...</p>}>
          <ScrollDown />
        </Suspense>
        <div className="flex flex-col gap-8">
          <About />
          <Suspense fallback={<p>Loading...</p>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <JobSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}
