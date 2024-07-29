import { useEffect, useState } from "react";
import {
  blurImageUrl,
  numOfWallpapers,
  wallpapers,
} from "../assets/wallpapers";

export default function useImageUrl(): { imageUrl: string; blurUrl: string } {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [blurUrl, setBlurUrl] = useState<string>(wallpapers[0].blur.src);

  useEffect(() => {
    const pickedId = Math.floor(Math.random() * numOfWallpapers);
    const imageUrl = wallpapers[pickedId].wallpaper.src;
    const blurUrl = wallpapers[pickedId].blur.src;
    setImageUrl(imageUrl);
    setBlurUrl(blurUrl);
  }, []);

  return { imageUrl, blurUrl };
}
