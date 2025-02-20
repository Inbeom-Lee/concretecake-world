export const dateFormatter_YYYYMM = (time) => {
  //year
  const getYear = time.getFullYear();

  //month
  const getMonth = time.getMonth() + 1;
  const checkMonth = getMonth < 10 ? `0${getMonth}` : getMonth;

  const YYYYMM = `${getYear}${checkMonth}`;

  return YYYYMM;
};
``;

export const dateFormatter_YYYYMMDD = (time) => {
  //year
  const getYear = time.getFullYear();

  //month
  const getMonth = time.getMonth() + 1;
  const checkMonth = getMonth < 10 ? `0${getMonth}` : getMonth;

  //date
  const getDate = time.getDate();
  const checkDate = getDate < 10 ? `0${getDate}` : getDate;

  const YYYYMMDD = `${getYear}${checkMonth}${checkDate}`;

  return YYYYMMDD;
};

export const dateFormatter_YYMM = (time) => {
  //year
  const getYear = time.getFullYear();
  const checkYear = String(getYear).slice(2, 4);

  //month
  const getMonth = time.getMonth() + 1;
  const checkMonth = getMonth < 10 ? `0${getMonth}` : getMonth;

  const YYYYMM = `${checkYear}${checkMonth}`;

  return YYYYMM;
};
``;

export const dateFormatter_YYMMDD = (time) => {
  //year
  const getYear = time.getFullYear();
  const checkYear = String(getYear).slice(2, 4);

  //month
  const getMonth = time.getMonth() + 1;
  const checkMonth = getMonth < 10 ? `0${getMonth}` : getMonth;

  //date
  const getDate = time.getDate();
  const checkDate = getDate < 10 ? `0${getDate}` : getDate;

  const YYYYMMDD = `${checkYear}${checkMonth}${checkDate}`;

  return YYYYMMDD;
};
