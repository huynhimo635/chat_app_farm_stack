import { createSlice } from '@reduxjs/toolkit'

const name = 'chat'

const initialState = {
  subUrl: 'general'
}

const chatSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSubUrl: (state, { payload }) => {
      state.subUrl = payload
    },

    resetState: (state) => {
      state = initialState
    }
  }
})

export const userActions = chatSlice.actions
export default chatSlice
