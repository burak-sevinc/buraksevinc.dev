import SkeletonContactSection from "@/components/contact/skeletonContactSection";
import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("@/components/contact/contactSection"),
  {
    loading: () => <SkeletonContactSection />,
    ssr: false,
  }
);

export default function JobSection() {
  return (
    <section id="contact" className="pt-20">
      <div className="flex flex-col gap-8 font-Poppins mt-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100">Work</h3>
        <p className="text-gray-800 dark:text-slate-100">
          I am an web developer with a passion for creating exceptional user
          experiences. I am actively seeking new job opportunities that allow me
          to apply my skills and expertise to develop innovative solutions.
          Let&lsquo;s work together to bring your web projects to life!
        </p>
        <ContactSection />
      </div>
    </section>
  );
}
