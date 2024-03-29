import React from "react";
import SkeletonTechStack from "@/components/projects/project/skeleton/skeletonTechStack";
export default function SkeletonProjectCard() {
  return (
    <>
      <div className="bg-[#eceef1] dark:bg-secondary rounded-lg overflow-hidden">
        <div>
          <div className="bg-gray-200 w-full h-64 dark:bg-skeleton rounded-lg overflow-hidden flex items-center justify-center">
            <svg
              className="w-12 text-center animate-pulse h-12 text-gray-400 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
        <div className="p-4 text-primay flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="bg-skeleton animate-pulse h-8 w-full"></div>
            <div className="flex animate-pulse items-start min-w-12 pt-2 md:pt-0">
              <div className="flex md:justify-end w-24 h-4 bg-skeleton"></div>
            </div>
          </div>
          <div className="flex animate-pulse h-4 bg-skeleton"></div>
          <div className="flex animate-pulse h-4 bg-skeleton"></div>
          <SkeletonTechStack />
          <div className="w-fit">
            <div className="bg-skeleton animate-pulse h-4 w-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
