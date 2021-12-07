// top 4 객체만 추출
export const getFilteredData = (data) => {
  const res = []
  data
    .map(({ name, postCount }) =>
      res.push({
        name,
        postCount,
      }),
    )
    .sort((a, b) => b.postCount - a.postCount)
  const sorted = res.sort((a, b) => b.postCount - a.postCount)
  const dataset = []
  for (let i = 0; i < 4; i += 1) {
    dataset.push(sorted[i])
  }

  return dataset
}
