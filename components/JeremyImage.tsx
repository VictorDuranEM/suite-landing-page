import Image from "next/image";
import jeremyImage from "../public/image-jeremy-large@2x.webp"

type JeremyImageProps = {
  className?: string;
};

export const JeremyImage: React.FC<JeremyImageProps> = ({ className }) => {
  return (
    <Image src={jeremyImage} className={`${className}`} alt={""} />
  );
};