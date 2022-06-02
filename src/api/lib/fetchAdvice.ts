import axios from 'axios';
import { ContentType } from '../types';

export const fetchAdvice = async (): Promise<ContentType> => {
  const advice = await fetcher();

  return filterText(advice);
};

const url = 'https://api.adviceslip.com/advice';

const fetcher = async (): Promise<string> => {
  try {
    const { data: { slip: { advice } } } = await axios.get(url, {
      params: { timeStamp: new Date().getTime() },
    });

    return advice;
  } catch (error) {
    console.error(error);
  }
};

const filterText = async (text: string): Promise<string> => {
  let count = 0;
  while (count < 30) {
    if (!checkText(text)) break;
    text = await fetcher();
    count++;
  }

  return text;
};

const checkText = (text: string): boolean => text.toLowerCase().includes('sex');
