import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hiddenLoading: (state, action) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hiddenLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
