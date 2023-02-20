import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  html: "",
  css:"",
  js:""
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setHtml: (state, action) => {
      state.html = action.payload
    },
    setCss:(state, action) => {
        state.css = action.payload
    },
    setJs: (state, action) => {
        state.js = action.payload
    }
  },
})

export const { setHtml, setCss, setJs } = codeSlice.actions

export default codeSlice.reducer