import axios from 'axios';

const url = 'https://api.adviceslip.com/advice';

const fetchFunc = async () => {
  try {
    const {
      data: {
        slip: { advice },
      },
    } = await axios.get(url, {
      params: { timeStamp: new Date().getTime() },
    });

    return advice;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAdvice = async () => {
  let advice = await fetchFunc();

  advice = filterAdvice(advice);

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
