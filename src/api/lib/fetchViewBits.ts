import axios from "axios";
import {
  LifeHacksReturnType,
  QuotesReturnType,
  API_NAMES,
  ApiNameType,
  FortuneCookieReturnType,
  JesterReturnType,
  UselessFactsReturnType,
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
  const { data } = await axios.get<LifeHacksReturnType>(url);
  return data.html;
};

export const fetchFortuneCookie = async (): Promise<string> => {
  const url = getUrl(API_NAMES.FORTUNE_COOKIE);
  const { data } = await axios.get<FortuneCookieReturnType>(url);
  console.log(data.html);
  return data.html;
};

export const fetchJester = async (): Promise<string> => {
  const url = getUrl(API_NAMES.JESTER);
  const { data } = await axios.get<JesterReturnType>(url);
  return data.html;
};

export const fetchUselessFacts = async (): Promise<string> => {
  const url = getUrl(API_NAMES.USELESS_FACTS);
  const { data } = await axios.get<UselessFactsReturnType>(url);
  return data.html;
};
