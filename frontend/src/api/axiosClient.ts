import axios from 'axios'
import Cookies from 'js-cookie'

import { API_BASE_URL } from '~/utils/constant'

//Set up default config for http request here
const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

axiosClient.interceptors.request.use(async (config) => {
  //Handle token here...
  const token = Cookies.get('access_token') ? `Bearer ${Cookies.get('access_token')}` : ''
  config.headers.setAuthorization(token)
  return config
})

axiosClient.interceptors.response.use(
  async (response) => {
    return response
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      throw error.response?.data?.detail
    } else {
      throw error
    }
  }
)

export default axiosClient
