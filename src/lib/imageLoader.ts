import { wallpapers } from "../assets/wallpapers";

export const imageLoader = () => {
  const pickedId = Math.floor(Math.random() * wallpapers.length);
  let imageUrl = wallpapers[pickedId].wallpaper;
  return imageUrl;
};
