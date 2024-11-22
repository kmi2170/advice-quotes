import axios, { AxiosRequestConfig } from "axios";
import { FortuneCookieResponseType, FortuneCookieReturnType } from "../types";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://fortune-cookie4.p.rapidapi.com/slack",
  headers: {
    "x-rapidapi-host": process.env.NEXT_X_RAPID_API_HOST_FORTUNE,
    "x-rapidapi-key": process.env.NEXT_X_RAPID_API_KEY,
  },
};

export const fetchFortuneCookie =
  async (): Promise<FortuneCookieResponseType> => {
    const { data } = await axios.request<FortuneCookieReturnType>(options);
    return { content: data.text };
  };
