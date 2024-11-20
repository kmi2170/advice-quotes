import { ApiType } from "../types";
import { fetchAdviceSlip } from "./fetchAdvice";
import { fetchQuotes } from "./fetchQuote";

export const getFetchFn = (type: ApiType) => {
  switch (type) {
    case "advice":
      return fetchAdviceSlip;
    case "quote":
      return fetchQuotes;
  }
};
