import axios from 'axios';
import { ContentType } from "../types";

const baseUrl = 'https://api.quotable.io/random';

export const fetchQuotes = async (category?: string): Promise<ContentType> => {
  try {
    const url = category ? `${baseUrl}?tags=${category}` : baseUrl;

    const {
      data: { content, author },
    } = await axios.get(url, {
      params: { timeStamp: new Date().getTime() },
    });

    return { content, author } as ContentType;
  } catch (error) {
    console.error();
  }
};
