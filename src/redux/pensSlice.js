import { createSlice } from '@reduxjs/toolkit';

const initialState = {savedPens:{}}

export const pensSlice = createSlice({
  name: 'pens',
  initialState,
  reducers: {
    setPens(state, action) {
      state.savedPens = action.payload;
    },
  },
});

export const { setPens } = pensSlice.actions;

export default pensSlice.reducer;
