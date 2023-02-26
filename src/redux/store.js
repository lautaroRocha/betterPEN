import { configureStore } from '@reduxjs/toolkit'
import codeReducer from './codeSlice'
import layoutReducer from './layoutSlice'
import navigationSlice from './navigationSlice'

export const store = configureStore({
  reducer: {
    code : codeReducer,
    layout : layoutReducer,
    navigation : navigationSlice
  },
})