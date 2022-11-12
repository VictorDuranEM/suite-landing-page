type PhoneImageProps = {
  className?: string;
};

export const PhoneImage: React.FC<PhoneImageProps> = ({ className }) => {
  return (
    <picture className={className}>
      <source media="(min-width: 768px)"
        srcSet="/image-hero-portrait.webp,
                /image-hero-portrait@2x.webp 2x" />
      <source 
        srcSet="/image-hero-landscape.webp,
                /image-hero-landscape@2x.webp 2x" />
      <img src="/image-hero-portrait@2x.webp" className={`${className}`} />
    </picture>
  );
};