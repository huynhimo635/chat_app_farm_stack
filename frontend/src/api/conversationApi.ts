import axiosClient from './axiosClient'

const prefixUrl = '/conversations'

const conversationApi = {
  getAll: () => {
    return axiosClient.get(prefixUrl)
  }
}

export default conversationApi
