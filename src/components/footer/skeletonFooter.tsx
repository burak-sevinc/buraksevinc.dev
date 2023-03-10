const SkeletonItem = () => {
  return <div className="animate-pulse bg-skeleton w-6 h-6 rounded-full"></div>;
};

export default function SkeletonFooter() {
  return (
    <div className="my-12 max-w-xl mx-auto h-32">
      <hr />
      <div className="flex md:flex-row flex-col gap-2 text-center md:justify-between pt-4">
        <p className="font-RobotoMono">buraksevinc.dev</p>
        <div>
          <div className="flex flex-row justify-center gap-4">
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </div>
        </div>
      </div>
    </div>
  );
}
