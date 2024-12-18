export const API_NAMES = {
  ADVICE: "advice",
  QUOTES: "zenquotes",
  FORTUNE_COOKIE: "fortune_cookie",
} as const;

export type ApiNameType = (typeof API_NAMES)[keyof typeof API_NAMES];

export type AdviceSlipType = { slip: { advice: string } };

export type AdviceResponseType = { content: string };

export type QuotesReturnType = {
  id: number;
  originator: {
    id: number;
    language_code: "en";
    description: string;
    master_id: number;
    name: string;
    url: string;
  };
  content: string;
  url: string;
  tags: string[];
};

export type QuotesResponseType = {
  content: string;
  author: string;
};

export type FortuneCookieReturnType = {
  response_type: string;
  text: string;
};

export type FortuneCookieResponseType = {
  content: string;
};

export type DataResponseType =
  | AdviceResponseType
  | QuotesResponseType
  | FortuneCookieResponseType;

export const API_CATEGORIES = {
  PRACTICAL: "Practical",
  FUN: "Fun",
} as const;

export type ApiCategoryType =
  (typeof API_CATEGORIES)[keyof typeof API_CATEGORIES];
