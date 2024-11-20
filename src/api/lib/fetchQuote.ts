import axios from "axios";
import { QuotesType } from "../types";

const url = "https://api.viewbits.com/v1/zenquotes?mode=random";

export const fetchQuotes = async (): Promise<string> => {
  const { data } = await axios.get<QuotesType[]>(url, {});
  return data[0].h;
};
