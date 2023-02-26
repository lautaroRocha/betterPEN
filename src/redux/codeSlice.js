import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_VALUES = {html:"", css:"", js:""}

const initialState = () => {
  const {pathname} = window.location
  let recoveredCode = DEFAULT_VALUES
  const code = pathname.substring(8)
  if(pathname.includes('editor')){
    const keepedCode =  Array.from(code.split('%7C'))
    recoveredCode = {
        html : window.atob(keepedCode[0]),
        css : window.atob(keepedCode[1]),
        js : window.atob(keepedCode[2])
    }
  }

  return recoveredCode
 
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
    },
    resetCode: (state) => {
      state.html = "",
      state.css =  "",
      state.js = ""
    }
  },
})

export const { setHtml, setCss, setJs, resetCode } = codeSlice.actions

export default codeSlice.reducer