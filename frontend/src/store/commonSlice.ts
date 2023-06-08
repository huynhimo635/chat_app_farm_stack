import { createSlice } from '@reduxjs/toolkit'

const name = 'common'

const initialState = {
  loading: false,
  notification: {
    isShow: false,
    type: '',
    message: ''
  }
}

const commonSlice = createSlice({
  name,
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload
    },

    displayNotification: (state, { payload }) => {
      state.notification = {
        ...initialState.notification,
        ...payload,
        isShow: true
      }
    },

    resetNotification: (state) => {
      state.notification = initialState.notification
    }
  }
})

export const commonActions = commonSlice.actions
export default commonSlice
