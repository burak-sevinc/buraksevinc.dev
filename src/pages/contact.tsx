import SkeletonContactSection from "@/components/contact/skeletonContactSection";
import React, { Suspense } from "react";

const PageHeader = React.lazy(() => import("@/components/page/pageHeader"));
const ContactSection = React.lazy(
  () => import("@/components/contact/contactSection")
);

export default function Contact() {
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <PageHeader
          title="Contact"
          description="You can contact my email or my social media accounts"
        />
      </Suspense>
      <div>
        <Suspense fallback={<SkeletonContactSection />}>
          <ContactSection />
        </Suspense>
      </div>
    </div>
  );
}
