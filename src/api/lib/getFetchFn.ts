import { API_NAMES, ApiNameType } from "../types";
import { fetchAdviceSlip } from "./fetchAdvice";
import {
  fetchFortuneCookie,
  fetchJester,
  fetchLifeHacks,
  fetchQuotes,
  fetchUselessFacts,
} from "./fetchViewBits";

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
    case API_NAMES.FORTUNE_COOKIE:
      return fetchFortuneCookie;
    case API_NAMES.USELESS_FACTS:
      return fetchUselessFacts;
    case API_NAMES.JESTER:
      return fetchJester;
    default:
      return "No Fetch Function Found";
  }
};
