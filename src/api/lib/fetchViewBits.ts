import axios from "axios";
import {
  LifeHacksReturnType,
  QuotesReturnType,
  API_NAMES,
  ApiNameType,
} from "../types";

const getUrl = (api_name: ApiNameType) =>
  `https://api.viewbits.com/v1/${api_name}?mode=random`;
("https://api.viewbits.com/v1/zenquotes?mode=random");

export const fetchQuotes = async (): Promise<string> => {
  const url = getUrl(API_NAMES.QUOTES);
  const { data } = await axios.get<QuotesReturnType[]>(url);
  return data[0].h;
};

export const fetchLifeHacks = async (): Promise<string> => {
  const url = getUrl(API_NAMES.LIFE_HACKS);
  const { data } = await axios.get<LifeHacksReturnType[]>(url);
  return data[0].html;
};
