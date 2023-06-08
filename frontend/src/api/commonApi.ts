import axiosClient from './axiosClient'

const commonApi = {
  healthCheck: () => {
    const subUrl = '/health-check'
    return axiosClient.get(subUrl)
  },

  healthCheckProtected: () => {
    const subUrl = `/users/profile`
    return axiosClient.get(subUrl)
  }
}

export default commonApi
