import { useEffect, useState } from "react";
import {
  blurImageUrl,
  numOfWallpapers,
  wallpapers,
} from "../assets/wallpapers";

export default function useImageUrl(): string {
  const [imageUrl, setImageUrl] = useState<string>(blurImageUrl);

  useEffect(() => {
    const pickedId = Math.floor(Math.random() * numOfWallpapers);
    const url = wallpapers[pickedId].wallpaper.src;
    setImageUrl(url);
  }, []);

  return imageUrl;
}
