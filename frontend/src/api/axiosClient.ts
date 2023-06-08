import axios from 'axios'
import Cookies from 'js-cookie'

import { HTTP_STATUS_CODES } from '~/utils/constant'

//Set up default config for http request here
const axiosClient = axios.create({
  // from https://github.com/facebook/create-react-app/issues/11951, it seems react had an issue with .env file
  // So, I just fix it as string here and go back to change it later.
  baseURL: 'http://localhost:8000/api/',
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
      if (error.response?.status === HTTP_STATUS_CODES.UNAUTHORIZED || error.status === HTTP_STATUS_CODES.FORBIDDEN) {
        window.location.pathname = '/sign-in'
      }
      throw error.response?.data?.detail
    } else {
      throw error
    }
  }
)

export default axiosClient
