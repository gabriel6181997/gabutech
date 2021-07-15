export const fixDateFormat = (createdAt: string) => {
  const parsedTimestamp = Date.parse(createdAt);
  const newDate = new Date(parsedTimestamp);
  const newMonth = newDate.getMonth() + 1;
  const newDay = newDate.getDate();
  const fixedDate = `${newDate.getFullYear()}年${newMonth}月${newDay}日`;

  return fixedDate;
};
