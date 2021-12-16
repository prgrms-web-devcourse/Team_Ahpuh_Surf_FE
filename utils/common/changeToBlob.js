export const changeToBlob = (data) => {
  if (!data) return
  const binaryData = []
  binaryData.push(data)
  const blob = URL.createObjectURL(new Blob(binaryData, { type: data.type }))
  return blob
}
