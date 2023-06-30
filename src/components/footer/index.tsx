import React from "react";
import SocialSection from "./social";

export default function Footer() {
  return (
    <div className="my-12 max-w-3xl mx-auto h-32">
      <hr />
      <div className="flex md:flex-row flex-col gap-2 text-center md:justify-between pt-4">
        <p className="font-RobotoMono">buraksevinc.dev </p>
        <div>
          <SocialSection />
        </div>
      </div>
    </div>
  );
}
