export const timeForToday = (createdAt) => {
  const today = new Date()
  const createdTime = new Date(createdAt)

  const betweenTime = Math.floor(
    (today.getTime() - createdTime.getTime()) / 1000 / 60,
  )
  const betweenTimeHour = Math.floor(betweenTime / 60)
  const betweenTimeDay = Math.floor(betweenTime / 60 / 24)

  if (betweenTime < 1) return '방금 전'
  if (betweenTime < 60) return `${betweenTime}분 전`
  if (betweenTimeHour < 24) return `${betweenTimeHour}시간 전`
  if (betweenTimeDay < 365) return `${betweenTimeDay}일 전`
  return `${Math.floor(betweenTimeDay / 365)}년 전`
}
