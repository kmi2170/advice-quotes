const data = [
  { data: 'This is Important.' },
  { data: 'This is Important.' },
  { data: 'This is Important.' },
  { data: 'This is test.' },
  { data: 'This is test.' },
  { data: 'This is test.' },
  { data: 'This is test.' },
];

const checkString = (string: string): boolean => {
  return string.toLowerCase().includes('important');
};

const filterOut = () => {
  let count = 0;
  let advice: string;
  let res: string[];
  while (count < 30) {
    // await new Promise((cb) => setTimeout(cb, 1000));

    res = data.map((el) => {
      const { data } = el;
      advice = data;
      if (!checkString(advice)) return advice;
    });

    count++;
  }
  console.log(res);
  return res[0];
};

const res = data.map((el) => {
  const { data } = el;
  let advice: string = data;
  // console.log(advice);

  if (checkString(advice)) {
    console.log('find string to filter out', advice);
    advice = filterOut();
    return advice;
  }
});
