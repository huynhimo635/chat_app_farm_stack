import { configureStore } from '@reduxjs/toolkit'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'

import commonSlice from './commonSlice'
import userSlice from './userSlice'
import chatSlice from './chatSlice'

export const store = configureStore({
  reducer: {
    [commonSlice.name]: commonSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [chatSlice.name]: chatSlice.reducer
  }
})

export const useSelector: TypedUseSelectorHook<any> = useReduxSelector
