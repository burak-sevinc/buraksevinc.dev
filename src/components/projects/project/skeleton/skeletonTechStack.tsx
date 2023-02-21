import React from "react";

const TechItemSkeleton = () => {
  return <div className="bg-skeleton animate-pulse w-28 h-8 py-1 px-2 rounded-lg"></div>;
};

export default function SkeletonTechStack() {
  return (
    <>
      <div className="text-sm flex space-x-2">
        <div className="gap-2 flex flex-wrap items-center">
          <div className="w-28 animate-pulse bg-skeleton h-4"></div>
          <TechItemSkeleton />
          <TechItemSkeleton />
          <TechItemSkeleton />
        </div>
      </div>
    </>
  );
}
