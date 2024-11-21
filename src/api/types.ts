export type AdviceSlipType = { slip: { advice: string } };

export const API_NAMES = {
  ADVICE: "advice",
  QUOTES: "zenquotes",
  LIFE_HACKS: "lifehacks",
  FORTUNE_COOKIE: "fortunecookie",
  USELESS_FACTS: "uselessfacts",
  JESTER: "jester",
} as const;

export type ApiNameType = (typeof API_NAMES)[keyof typeof API_NAMES];

export type QuotesReturnType = {
  q: string;
  a: string;
  h: string;
};

type BaseReturnType = {
  text: string;
  source: string;
  url: string;
  html: string;
};

export type LifeHacksReturnType = BaseReturnType;

export type UselessFactsReturnType = BaseReturnType;

export type JesterReturnType = BaseReturnType;

export type FortuneCookieReturnType = BaseReturnType & {
  numbers: string;
};

export const API_CATEGORIES = {
  PRACTICAL: "Practical",
  FUN: "Fun",
} as const;

export type ApiCategoryType =
  (typeof API_CATEGORIES)[keyof typeof API_CATEGORIES];
