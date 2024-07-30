import { useEffect, useRef, useState } from "react";
import { numOfWallpapers, wallpapers } from "../assets/wallpapers";
import { StaticImageData } from "next/image";
import { defaultBlurData } from "../../public/wallpapers/default_blur";

export default function getImageUrl(): { imageUrl: StaticImageData | string } {
  const pickedId = Math.floor(Math.random() * numOfWallpapers);
  const initialImageUrl = wallpapers[pickedId].wallpaper;
  const [imageUrl, setImageUrl] = useState<StaticImageData | string>(
    initialImageUrl
  );
  //const [isInitialLoad, setIsInitialLoad] = useState(false);
  const isInitialLoad = useRef(false);
  // const pickedId = Math.floor(Math.random() * numOfWallpapers);
  // const imageUrl = wallpapers[pickedId].wallpaper;
  // const image = useRef<StaticImageData>(imageUrl);

  useEffect(() => {
    if (!isInitialLoad.current) {
      // const pickedId = Math.floor(Math.random() * numOfWallpapers);
      // const imageUrl = wallpapers[pickedId].wallpaper;
      // image.current = imageUrl;
      // setImageUrl(imageUrl);
    }
    isInitialLoad.current = true;
    // setIsInitialLoad(true);
  }, []);
  console.log({ isInitialLoad });

  return { imageUrl };
}
