import {
  AdviceResponseType,
  API_NAMES,
  ApiNameType,
  QuotesResponseType,
} from "../types";
import { fetchAdviceSlip } from "./fetchAdvice";
import { fetchFortuneCookie } from "./fetchFortuneCookie";
import { fetchQuotes } from "./fetchQuote";

export const getFetchFn = (
  type: ApiNameType
): (() => Promise<AdviceResponseType | QuotesResponseType>) | string => {
  switch (type) {
    case API_NAMES.ADVICE:
      return fetchAdviceSlip;
    case API_NAMES.QUOTES:
      return fetchQuotes;
    case API_NAMES.FORTUNE_COOKIE:
      return fetchFortuneCookie;
    default:
      return "No Fetch Function Found";
  }
};
