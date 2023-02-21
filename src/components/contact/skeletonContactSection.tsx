const Item = () => {
  return (
    <div className="animate-pulse bg-secondary hover:bg-skeleton shadow hover:scale-110 transition ease-in-out flex h-24 items-center justify-center p-8 rounded-lg"></div>
  );
};

export default function SkeletonContactSection() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
