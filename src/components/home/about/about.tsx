import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-20">
      <div className="prose dark:prose-invert font-Poppins flex">
        <div className="md:w-3/4 w-full">
          <h2 className="">About</h2>
          <div className="">
            <p>{`Hi there! I'm a web developer who's passionate about React.js. I've developed several projects with it and find it to be a powerful and versatile framework. Lately, I've been exploring Typescript and have found it to be incredibly useful in improving the quality of my code.`}</p>
            <p>{`I have experience using Laravel to build robust web applications, and I like TailwindCSS. I find it to be an efficient way to style my projects and get great results quickly.`}</p>
            <p>
              {`Lastly, I love working with Next.js. It's an exciting framework that allows me to build dynamic and engaging web applications. I'm always eager to learn new things and improve my `}{" "}
              <Link href="#skills" scroll={false}>
                skills
              </Link>{" "}
              as a developer.
            </p>
          </div>
        </div>
        <div className="sticky hidden md:flex top-32 w-24 h-24 mx-8 py-5 mb-20">
          <div className="py-8">
            <div className="w-24 aspect-square bg-skeleton rounded-full">
            </div>
            {/* <Image
              className="rounded-lg"
              src={"/img/test-img.jpg"}
              alt="Test"
              fill
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
