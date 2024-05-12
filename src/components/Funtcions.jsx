export const formattedTime = (time) => {
  const valueSeconds = 60;
  const minuteTime = Math.floor(time / valueSeconds)
    .toString()
    .padStart(2, "0");
  const secondsTime = (time % valueSeconds).toString().padStart(2, "0");

  const timeValue = `${minuteTime} : ${secondsTime}`;
  return timeValue;
};
