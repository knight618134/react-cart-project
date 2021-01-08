import axios from "axios"
import { server } from "api/server"

export const asyncRequest = async (urlEnd, type, payload = {}) =>
  axios({
    method: type,
    url: `${server.backendUrl}${urlEnd}`,
    data: payload,
  })
