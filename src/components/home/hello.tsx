import Image from "next/image";
import React from "react";
import TechSection from "./about/techSection";

export default function Hello() {
  return (
    <div className="grid grid-cols-1 items-center gap-4 p-4 font-Poppins md:grid-cols-3 mt-12">
      <div className="text-center md:col-span-2 md:text-left">
        <p className=" md:text-2xl">Hello! I am</p>
        <h1 className="-ml-1 text-4xl md:text-6xl text-amber-500 dark:text-primary">
          Burak Sevinç
        </h1>
        <p className="text-amber-600 dark:text-sky-600">
          React Front end dev. & Full Stack Developer
        </p>
        <div className="flex md:justify-start justify-center">
          <TechSection />
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 blur opacity-0 dark:opacity-50 rounded-full"></div>
        <div className="relative aspect-square rounded-full overflow-hidden">
          <Image src={"/img/test-img.jpg"} alt="me" fill />
        </div>
      </div>
    </div>
  );
}
