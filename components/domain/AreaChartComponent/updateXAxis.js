import dayjs from 'dayjs'

export const updateXAxis = (monthFrom, monthEnd) => {
  const year = new Date().getFullYear()
  return {
    min: new Date(`${year}-${monthFrom}-01`).getTime(),
    max: new Date(`${year}-${monthEnd}-30`).getTime(),
    labels: {
      formatter(val) {
        return dayjs(val).format('M/DD')
      },
    },
  }
}
