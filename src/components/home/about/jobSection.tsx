import React, { Suspense } from "react";
import SkeletonContactSection from "@/components/contact/skeletonContactSection";
import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("@/components/contact/contactSection"),
  { ssr: false }
);

export default function JobSection() {
  return (
    <section id="contact" className="pt-20">
      <div className="prose dark:prose-invert font-Poppins mt-8">
        <h3>Work</h3>
        <p>
          I am an web developer with a passion for creating exceptional user
          experiences. I am actively seeking new job opportunities that allow me
          to apply my skills and expertise to develop innovative solutions.
          Let&lsquo;s work together to bring your web projects to life!
        </p>
        <Suspense fallback={<SkeletonContactSection />}>
          <ContactSection />
        </Suspense>
      </div>
    </section>
  );
}
