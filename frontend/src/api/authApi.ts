import axiosClient from './axiosClient'

import type { LoginRequestType, RegisterRequestType } from '~/models'

const prefixUrl = '/auth'

const authApi = {
  login: (data: LoginRequestType) => {
    const subUrl = prefixUrl + '/login'
    return axiosClient.post(subUrl, data)
  },

  register: (data: RegisterRequestType) => {
    const subUrl = prefixUrl + '/register'
    return axiosClient.post(subUrl, data)
  },

  refreshToken: () => {
    const subUrl = prefixUrl + '/refresh'
    return axiosClient.get(subUrl)
  },

  logout: () => {
    const subUrl = prefixUrl + '/logout'
    return axiosClient.get(subUrl)
  }
}

export default authApi
