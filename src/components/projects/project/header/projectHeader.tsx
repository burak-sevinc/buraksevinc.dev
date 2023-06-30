import { IProject } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";
export default function ProjectHeader({ project }: { project: IProject }) {
  return (
    <>
      <div className="space-y-4">
        <h1 className="font-extrabold text-5xl tracking-tight text-[#4fa9ff]">
          {project.title}
        </h1>
        <p className="text-md">{project.excerpt}</p>
      </div>

      <div className="flex md:flex-row flex-col justify-between md:items-center space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 relative rounded-full overflow-hidden object-cover">
            <Image
              src={"/me.png"}
              alt="Burak Sevinç"
              fill
            />
          </div>
          <p>Burak Sevinç</p>
        </div>

        <div className="flex space-x-2 text-sm">
          <p>{dayjs(project.publishedAt).format("MMMM D, YYYY")}</p>
          <span>&middot;</span>
          <p>{project.readingTime}</p>
        </div>
      </div>
    </>
  );
}
