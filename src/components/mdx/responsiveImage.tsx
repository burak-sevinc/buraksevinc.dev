import Image from "next/image";
type Props = {
  src: string;
  alt: string;
};
const ResponsiveImage = (props: Props) => {
  return (
    <div className="relative w-full h-80 shadow">
      <div className="overflow-hidden">
        <Image
          className="object-cover rounded-lg"
          src={props.src}
          alt={props.alt}
          fill
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;
