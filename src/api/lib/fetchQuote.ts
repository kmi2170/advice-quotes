import axios, { AxiosRequestConfig } from "axios";
import { QuotesResponseType, QuotesReturnType } from "../types";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
  headers: {
    "x-rapidapi-host": process.env.NEXT_X_RAPID_API_HOST,
    "x-rapidapi-key": process.env.NEXT_X_RAPID_API_KEY,
  },
};

export const fetchQuotes = async (): Promise<QuotesResponseType> => {
  const { data } = await axios.request<QuotesReturnType>(options);
  return { content: data.content, author: data.originator.name };
};
