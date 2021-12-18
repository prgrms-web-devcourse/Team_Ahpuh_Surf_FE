export const setCookieTimes = (time) => {
  const date = new Date()
  date.setTime(date.getTime() + time)
  return date
}
