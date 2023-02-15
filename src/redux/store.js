import { configureStore } from '@reduxjs/toolkit'
import codeReducer from './codeSlice'
import layoutReducer from './layoutSlice'

export const store = configureStore({
  reducer: {
    code : codeReducer,
    layout : layoutReducer
  },
})