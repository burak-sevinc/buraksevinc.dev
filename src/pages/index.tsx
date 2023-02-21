import About from "@/components/home/about/about";
import Skills from "@/components/home/about/skills";
import Hello from "@/components/home/hello";
import ScrollDown from "@/components/home/scrollDown";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hello />
        <hr className="my-12" />
        <ScrollDown />
        <div className="flex flex-col gap-8">
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}
