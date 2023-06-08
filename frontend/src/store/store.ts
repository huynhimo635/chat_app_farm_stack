import { configureStore } from '@reduxjs/toolkit'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'

import commonSlice from './commonSlice'

export const store = configureStore({
  reducer: {
    [commonSlice.name]: commonSlice.reducer
  }
})

export const useSelector: TypedUseSelectorHook<any> = useReduxSelector
