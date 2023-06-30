export default function TechStack({techStack}: {techStack?: string[]}) {
  return (
    <div className="text-sm flex space-x-2">
      <div className="gap-2 flex flex-wrap items-center">
        <div className="font-bold">Techstack</div>
        {techStack?.map((tech, i) => (
          <div
            className="bg-[#4fa9ff] text-secondary py-1 px-2 rounded-lg"
            key={i}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
