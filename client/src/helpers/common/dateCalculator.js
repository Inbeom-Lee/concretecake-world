export const date_Calculator = (time) => {
  const dateNow = new Date();
  const inquiryDate = new Date(time);
  const yearGap = Math.floor((dateNow - inquiryDate) / 31536000000);
  const monthGap = Math.floor((dateNow - inquiryDate) / 2678400000);
  const dayGap = Math.floor((dateNow - inquiryDate) / 86400000);
  const hourGap = Math.floor((dateNow - inquiryDate) / 3600000);
  const minuteGap = Math.floor((dateNow - inquiryDate) / 60000);
  const showTime =
    yearGap < 1
      ? monthGap < 1
        ? dayGap < 1
          ? hourGap < 1
            ? minuteGap < 1
              ? "방금 전"
              : `${minuteGap}분 전`
            : `${hourGap}시간 전`
          : `${dayGap}일 전`
        : `${monthGap}달 전`
      : `${yearGap}년 전`;
  return showTime;
};
