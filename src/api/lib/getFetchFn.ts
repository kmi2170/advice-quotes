import { API_NAMES, ApiNameType } from "../types";
import { fetchAdviceSlip } from "./fetchAdvice";
import { fetchLifeHacks, fetchQuotes } from "./fetchViewBits";

export const getFetchFn = (
  type: ApiNameType
): (() => Promise<string>) | string => {
  switch (type) {
    case API_NAMES.ADVICE:
      return fetchAdviceSlip;
    case API_NAMES.QUOTES:
      return fetchQuotes;
    case API_NAMES.LIFE_HACKS:
      return fetchLifeHacks;
    default:
      return "No Fetch Function Found";
  }
};
