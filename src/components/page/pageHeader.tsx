import { IPageHeader } from "@/types";
import React from "react";

export default function PageHeader({ title, description }: IPageHeader) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-5xl tracking-tight">{title}</h1>
        <p className="text-lg tracking-tight">{description}</p>
      </div>
      <hr />
    </>
  );
}
