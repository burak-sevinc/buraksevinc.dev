import React, { Suspense } from "react";
import SkeletonContactSection from "@/components/contact/skeletonContactSection";

const ContactSection = React.lazy(
  () => import("@/components/contact/contactSection")
);

export default function JobSection() {
  return (
    <section id="contact">
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
