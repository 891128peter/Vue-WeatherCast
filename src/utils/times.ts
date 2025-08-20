// 獲取當前時間
export const getTime = () => {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 18) {
    return { time1: "今天白天", time2: "今晚明晨", time3: "明天白天" };
  } else if (hours >= 18 || hours <= 6) {
    return { time1: "今晚明晨", time2: "明天白天", time3: "明天晚上" };
  }
};
