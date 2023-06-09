import axiosClient from './axiosClient'

const commonApi = {
  healthCheck: () => {
    const subUrl = '/health-check'
    return axiosClient.get(subUrl)
  }
}

export default commonApi
