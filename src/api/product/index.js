import { asyncRequest } from "api/index"
export const fetchProducts = () => {
  const urlEnd = "/products"
  const type = "get"
  const result = asyncRequest(urlEnd, type).then((resp) => {
    if (Number(resp.data[0].errorCode) !== 1) {
      return Promise.reject(console.log("error"))
    }
    return resp.data
  })
  return result
}
