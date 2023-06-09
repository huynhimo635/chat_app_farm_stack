import axiosClient from './axiosClient'

const prefixUrl = '/users'

const commonApi = {
  getProfile: () => {
    const subUrl = `${prefixUrl}/profile`
    return axiosClient.get(subUrl)
  }
}

export default commonApi
