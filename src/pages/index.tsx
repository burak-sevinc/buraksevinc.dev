import About from "@/components/home/about/about";
import Hello from "@/components/home/hello";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-16">

      <Hello />
      <About />
    </div>

    </>
  );
}
