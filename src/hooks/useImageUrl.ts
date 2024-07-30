import { useEffect, useState } from "react";
import { numOfWallpapers, wallpapers } from "../assets/wallpapers";

export default function useImageUrl(): { imageUrl: string } {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const pickedId = Math.floor(Math.random() * numOfWallpapers);
    const imageUrl = wallpapers[pickedId].wallpaper.src;
    setImageUrl(imageUrl);
  }, []);

  return { imageUrl };
}
