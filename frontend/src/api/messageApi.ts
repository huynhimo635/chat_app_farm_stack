import axiosClient from './axiosClient'

const prefixUrl = '/messages'

const conversationApi = {
  get: (conversationId: string) => {
    const subUrl = `${prefixUrl}/${conversationId}`
    return axiosClient.get(subUrl)
  }
}

export default conversationApi
