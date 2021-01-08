export const formatPrice = (cent) => {
  return cent.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  })
}
