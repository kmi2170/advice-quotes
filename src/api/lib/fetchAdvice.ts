import axios from 'axios';
// import { ContentType } from "../types";

const url = 'https://api.adviceslip.com/advice';

const fetchFunc = async (): Promise<string> => {
  try {
    const { data: { slip: { advice } } }
      = await axios.get(url, {
        params: { timeStamp: new Date().getTime() },
      });

    return advice as string;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAdvice = async () => {
  const advice = await fetchFunc();

  const filteredadvice = filterAdvice(advice);

  return advice;
};

const filterAdvice = async (advice: string) => {
  let count = 0;
  while (count < 30) {
    if (!checkString(advice)) break;

    advice = await fetchFunc();

    count++;
  }

  return advice;
};

const checkString = (string: string): boolean =>
  string.toLowerCase().includes('sex');
