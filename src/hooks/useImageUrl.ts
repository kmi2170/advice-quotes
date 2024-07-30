import { useEffect, useState } from "react";
import {
  blurImageUrl,
  numOfWallpapers,
  wallpapers,
} from "../assets/wallpapers";

export default function useImageUrl(): { imageUrl: string; blurUrl: string } {
  // const pickedId = Math.floor(Math.random() * numOfWallpapers);
  // const imageUrl = wallpapers[pickedId].wallpaper.src;
  // const blurUrl = wallpapers[pickedId].blur;
  const [imageUrl, setImageUrl] = useState<string>("");
  const [blurUrl, setBlurUrl] = useState<string>(wallpapers[0].blur);

  useEffect(() => {
    const pickedId = Math.floor(Math.random() * numOfWallpapers);
    const imageUrl = wallpapers[pickedId].wallpaper.src;
    const blurUrl = wallpapers[pickedId].blur;
    setImageUrl(imageUrl);
    setBlurUrl(blurUrl);
  }, []);

  return { imageUrl, blurUrl };
}
