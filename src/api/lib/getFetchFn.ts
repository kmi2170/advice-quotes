import { API_NAMES, ApiNameType } from "../types";
import { fetchAdviceSlip } from "./fetchAdvice";
import { fetchQuotes } from "./fetchViewBits";

export const getFetchFn = (type: ApiNameType) => {
  switch (type) {
    case API_NAMES.ADVICE:
      return fetchAdviceSlip;
    case API_NAMES.QUOTES:
      return fetchQuotes;
  }
};
