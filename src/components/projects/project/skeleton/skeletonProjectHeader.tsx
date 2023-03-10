import React from "react";

export default function SkeletonProjectHeader() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-full bg-skeleton"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-skeleton rounded col-span-2"></div>
          <div className="h-2 bg-skeleton rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-skeleton rounded"></div>
      </div>
      <div className="flex md:flex-row flex-col justify-between md:items-center space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-36 bg-skeleton"></div>
        </div>

        <div className="flex space-x-2 text-sm">
          <div className="h-4 w-8 bg-skeleton"></div>
          <div className="h-4 w-8 bg-skeleton"></div>
        </div>
      </div>
    </div>
  );
}
