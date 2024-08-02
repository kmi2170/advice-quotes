import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type BackgroundImageProps = {
  img: StaticImageData;
};

export default function BackgroundImage(props: BackgroundImageProps) {
  let { img } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted && (
        <Image
          src={img}
          placeholder="blur"
          alt="background"
          quality={50}
          fill
          //sizes="100vw 100vh"
          priority
          style={{
            objectFit: "cover",
            zIndex: -10,
          }}
        />
      )}
    </>
  );
}
