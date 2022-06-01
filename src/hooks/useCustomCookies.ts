import { useCookies } from 'react-cookie';

const cookiesOptions = {
  path: '/',
  maxAge: 2600000,
  sameSite: true,
};

export const useCustomeCookies = () => {
  const [cookies, setCookie] = useCookies(['button', 'wallpaper']);

  const setButtonCookie = isTypeButtonSelected =>
    setCookie('button', isTypeButtonSelected, cookiesOptions);

  const setWallpaperCookie = wallpaper =>
    setCookie('wallpaper', wallpaper, cookiesOptions);

  return { cookies, setButtonCookie, setWallpaperCookie };
};
