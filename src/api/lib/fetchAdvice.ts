import axios from "axios";
import { AdviceResponseType, AdviceSlipType } from "../types";

export const fetchAdviceSlip = async (): Promise<AdviceResponseType> => {
  const advice = await fetchFnc();
  const filteredText = await filterText(advice);
  return { content: filteredText };
};

const url = "https://api.adviceslip.com/advice";

const fetchFnc = async (): Promise<string | never> => {
  try {
    const { data } = await axios.get<AdviceSlipType>(url, {
      params: { timeStamp: new Date().getTime() },
    });
    const {
      slip: { advice },
    } = data;
    return advice;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

async function filterText(text: string) {
  let filteredText = text;
  let count = 0;
  while (count < 30) {
    if (excludeTextExists(text)) {
      filteredText = await fetchFnc();
    } else {
      return filteredText;
    }
    count++;
  }
  return filteredText;
}

const excludeTextList: string[] = ["sex"];

function excludeTextExists(text: string): boolean {
  for (const excludeItem of excludeTextList) {
    if (text.toLowerCase().includes(excludeItem)) {
      return true;
    }
  }
  return false;
}
