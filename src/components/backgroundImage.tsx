import Image from "next/image";
import { wallpapers } from "../assets/wallpapers";

const imageLoader = () => {
  const pickedId = Math.floor(Math.random() * wallpapers.length);
  let imageUrl = wallpapers[pickedId].wallpaper;
  return imageUrl;
};

export default function BackgroundImage() {
  const img = imageLoader();

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
