import { createSlice } from '@reduxjs/toolkit'

import { UserType } from '~/models'

const name = 'user'

const initialState = {
  user: {
    first_name: '',
    last_name: '',
    email: '',
    photo: '',
    created_at: '',
    updated_at: '',
    full_name: '',
    id: ''
  } as UserType
}

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setProfile: (state, { payload }) => {
      state.user = payload
    },

    resetState: (state) => {
      state = initialState
    }
  }
})

export const userActions = userSlice.actions
export default userSlice
