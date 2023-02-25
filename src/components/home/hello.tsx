import Image from "next/image";
import React from "react";
import TechSection from "./about/techSection";

export default function Hello() {
  return (
    <div className="grid grid-cols-1 items-center gap-4 p-4 font-Poppins md:grid-cols-3 mt-12">
      <div className="text-center md:col-span-2 flex flex-col gap-4 md:text-left">
        <p className="md:text-2xl">Hello! I am</p>
        <h1 className="-ml-1 text-4xl md:text-6xl text-gray-800 dark:text-primary font-bold">
          Burak Sevinç
        </h1>
        <p className="text-gray-800 dark:text-primary ">
          React Frontend & Full Stack (Laravel) Dev
        </p>
        <div className="flex md:justify-start justify-center">
          <TechSection />
        </div>
      </div>
      <div className="relative md:w-full w-1/2 mx-auto">
        <div className="absolute -inset-0.5 dark:bg-gradient-to-r dark:from-primary dark:to-purple-600 blur opacity-0 dark:opacity-50 rounded-full"></div>
        <div className="relative aspect-square rounded-full overflow-hidden">
          {/* 131x131 171x171 px */}
          <Image src={"/img/test-img.jpg"} alt="Burak Sevinç" fill quality={50} />
        </div>
      </div>
    </div>
  );
}
