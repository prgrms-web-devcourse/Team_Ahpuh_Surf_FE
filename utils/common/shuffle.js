export const shuffle = (array) => {
  console.log(array, 'array')
  return array.sort(() => Math.random() - 0.5)[0]
}
