export default function SkeletonProjectFooter() {
  return (
    <div className="flex justify-center pt-8 animate-pulse">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex w-8 aspect-square rounded-full bg-skeleton"></div>
        <p className="bg-skeleton h-2 w-12"></p>
      </div>
    </div>
  );
}
