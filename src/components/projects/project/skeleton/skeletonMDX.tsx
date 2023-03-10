import React from "react";

export default function SkeletonMDX() {
  return (
    <>
      <div className="space-y-3">
        <div className="grid animate-pulse grid-cols-3 gap-4">
          <div className="h-4 bg-skeleton rounded col-span-2"></div>
          <div className="h-4 bg-skeleton rounded col-span-1"></div>
          <div className="h-4 bg-skeleton rounded col-span-3"></div>
          <div className="h-4 bg-skeleton rounded col-span-3"></div>
          <div className="h-4 bg-skeleton rounded col-span-1"></div>
          <div className="h-4 bg-skeleton rounded col-span-2"></div>
          <div className="h-4 bg-skeleton rounded col-span-3"></div>
          <div className="h-4 bg-skeleton rounded col-span-2"></div>
          <div className="h-4 bg-skeleton rounded col-span-1"></div>
          <div className="h-4 bg-skeleton rounded col-span-3"></div>
          <div className="h-4 bg-skeleton rounded col-span-3"></div>
          <div className="h-4 bg-skeleton rounded col-span-1"></div>
          <div className="h-4 bg-skeleton rounded col-span-2"></div>
          <div className="h-4 bg-skeleton rounded col-span-3"></div>
        </div>
      </div>
    </>
  );
}
