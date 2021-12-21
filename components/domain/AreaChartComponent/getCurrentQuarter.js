export const getCurrentQuarter = () => {
  const month = new Date().getMonth() + 1
  if (month >= 1 && month < 4) {
    return 1
  }
  if (month >= 4 && month < 7) {
    return 2
  }
  if (month >= 7 && month < 10) {
    return 3
  }
  return 4
}
