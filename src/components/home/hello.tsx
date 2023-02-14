import React from "react";

export default function Hello() {
  return (
    <div className="grid grid-cols-1 items-center gap-4 p-4 font-Poppins md:grid-cols-3">
      <div className="text-center md:col-span-2 md:text-left">
        <p className=" md:text-2xl">Hello! I am</p>
        <h1 className="-ml-1 text-4xl text-amber-500 dark:text-primary md:text-6xl ">
          Burak Sevinç
        </h1>
        <p className="">Front end & Full Stack Developer</p>
      </div>
      <div className="aspect-square rounded-full bg-slate-500"></div>
    </div>
  );
}
