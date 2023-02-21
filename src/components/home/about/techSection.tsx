import Image from "next/image";
import React from "react";

export default function TechSection() {
  return (
    <div>
      <div className="flex px-2 py-2">
        <div className="relative transition ease-in-out hover:scale-110 hover:z-10">
          <div className="absolute rounded-lg skew-x-[25deg] rotate-[-10deg] bg-[#F7DF1E] brightness-90 drop-shadow-[-0.4rem_0.4rem_0.2rem_rgba(0,0,0,30%)] dark:drop-shadow-[-0.4rem_0.4rem_0.2rem_rgba(255,255,255,5%)] top-[0.1rem] h-[35px] w-[35px]"></div>
          <div className="flex">
            <span className="skew-x-[25deg] rotate-[-10deg] ">
              <Image
                className="rounded-lg"
                src={"/techstack/javascript.svg"}
                alt="javascript"
                width={35}
                height={35}
              />
            </span>
          </div>
        </div>
        <div className="relative transition ease-in-out hover:scale-110 hover:z-10">
          <div className="absolute rounded-lg skew-x-[25deg] rotate-[-10deg] bg-[#017ACC] brightness-90 drop-shadow-[-0.4rem_0.4rem_0.2rem_rgba(0,0,0,30%)] dark:drop-shadow-[-0.4rem_0.4rem_0.2rem_rgba(255,255,255,5%)] top-[0.1rem] h-[35px] w-[35px]"></div>
          <div className="flex">
            <span className="skew-x-[25deg] rotate-[-10deg] ">
              <Image
                className="rounded-lg"
                src={"/techstack/typescript-icon.svg"}
                alt="javascript"
                width={35}
                height={35}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
