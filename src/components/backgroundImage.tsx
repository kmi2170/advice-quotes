"use client";

import Image, { StaticImageData } from "next/image";
import { imageLoader } from "../lib/imageLoader";
import { useEffect, useState } from "react";

export default function BackgroundImage() {
  const [img, setImg] = useState<StaticImageData | null>(null);

  useEffect(() => {
    const img = imageLoader();
    setImg(img);
  }, []);

  if (!img) return;

  return (
    <Image
      src={img}
      placeholder="blur"
      alt="background"
      quality={50}
      fill
      priority
      style={{
        objectFit: "cover",
        zIndex: -10,
      }}
    />
  );
}
