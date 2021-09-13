import axios from 'axios';

const baseUrl = 'https://api.quotable.io/random';

export const fetchQuotes = async (category?: string) => {
  try {
    const url = category ? `${baseUrl}?tags=${category}` : baseUrl;

    const {
      data: { content, author },
    } = await axios.get(url, {
      params: { timeStamp: new Date().getTime() },
    });

    return { content, author };
  } catch (error) {
    console.error();
  }
};
