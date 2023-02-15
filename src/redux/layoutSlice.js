import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 flexLayout : false
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    selectGrid: (state) => {
      state.flexLayout = false
    },
    selectFlex: (state) => {
        state.flexLayout = true
    }
  },
})

export const { selectGrid, selectFlex } = layoutSlice.actions

export default layoutSlice.reducer