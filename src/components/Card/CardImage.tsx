import classNames from "classnames";
import s from "./styles.module.scss";
import ExportedImage from "next-image-export-optimizer";
import type { StaticImageData } from "next/image";

type CardImageProps = {
  src: string | StaticImageData;
  alt: string;
  classes?: string;
};

const CardImage = ({ src, alt, classes }: CardImageProps) => {
  const imageClasses = classNames(s.image, classes || '');
  
  return (
    <ExportedImage src={src} alt={alt} className={imageClasses} />
  );
};

export default CardImage;
