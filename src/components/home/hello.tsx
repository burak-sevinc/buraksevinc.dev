import React from "react";
import dynamic from "next/dynamic";
import TechSection from "./about/techSection";

function SkeletonImage() {
  return (
    <div className="flex min-h-full min-w-full justify-center items-center bg-skeleton">
      <span>
        <svg
          className="w-12 text-center animate-pulse h-12 text-gray-400 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </span>
    </div>
  );
}

const Image = dynamic(() => import("next/image"), {
  loading: () => <SkeletonImage />,
  ssr: false,
});

export default function Hello() {
  return (
    <div className="grid grid-cols-1 items-center gap-4 p-4 font-Poppins md:grid-cols-3 mt-12">
      <div className="text-center md:col-span-2 flex flex-col gap-4 md:text-left">
        <p className="md:text-2xl">Hello! I am</p>
        <h1 className="-ml-1 text-4xl md:text-6xl text-gray-800 dark:text-primary font-bold">
          Burak Sevinç
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-gray-800 dark:text-primary ">Full Stack Dev</p>
          <p className="text-xs italic">React, Next.js, Laravel, trpc and more...</p>
        </div>
        {/* <div className="flex md:justify-start justify-center">
          <TechSection />
        </div> */}
      </div>
      <div className="relative md:w-full w-1/2 mx-auto">
        <div className="absolute -inset-0.5 dark:bg-gradient-to-r dark:from-primary dark:to-purple-600 blur opacity-0 dark:opacity-50 rounded-full"></div>
        <div className="relative aspect-square rounded-full overflow-hidden">
          <Image
            src={"/me.png"}
            alt="Burak Sevinç"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </div>
  );
}
