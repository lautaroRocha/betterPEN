import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 flexLayout : 'flex'
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    selectGrid: (state) => {
      state.flexLayout = 'grid'
    },
    selectFlex: (state) => {
        state.flexLayout = 'flex'
    },
    selectReverseFlex: (state)=>{
      state.flexLayout = 'reverse-flex'
    }
  },
})

export const { selectGrid, selectFlex, selectReverseFlex } = layoutSlice.actions

export default layoutSlice.reducer