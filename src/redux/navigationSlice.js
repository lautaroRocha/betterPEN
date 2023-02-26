import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    hasNavigatedAway: false,
  },
  reducers: {
    setHasNavigatedAway(state, action) {
      state.hasNavigatedAway = action.payload;
    },
  },
});

export const { setHasNavigatedAway } = navigationSlice.actions;

export default navigationSlice.reducer;
