import About from "@/components/home/about/about";
import React, { Suspense } from "react";
import Hello from "@/components/home/hello";

const ScrollDown = React.lazy(() => import("@/components/home/scrollDown"));
const Skills = React.lazy(() => import("@/components/home/about/skills"));
const JobSection = React.lazy(
  () => import("@/components/home/about/jobSection")
);

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hello />
        <hr className="my-12" />
        <Suspense fallback={<p>...</p>}>
          <ScrollDown />
        </Suspense>
        <div className="flex flex-col gap-8">
          <About />
          <Suspense>
            <Skills />
          </Suspense>
          <Suspense>
            <JobSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}
