export const getMonthListFromStartToDate = (start: string): string[] => {
  const result: string[] = [];
  const [startYear, startMonth] = start.split("-").map(Number);

  const startDate = new Date(startYear, startMonth - 1); // 開始年月
  const currentDate = new Date(); // 現在年月

  let currentYear = startDate.getFullYear();
  let currentMonth = startDate.getMonth(); // 0から始まる月

  while (
    currentYear < currentDate.getFullYear() ||
    (currentYear === currentDate.getFullYear() && currentMonth <= currentDate.getMonth())
  ) {
    // YYYY-MM 形式で年月をリストに追加
    const monthString = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`;
    result.push(monthString);

    // 翌月に移行
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return result;
};
