import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/baseService";
import { hiddenLoading, showLoading } from "./LoadingSlice";

const initialState = {
  priceGold: [],
  priceCoin: [],
};

export const PriceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPriceGold.fulfilled, (state, action) => {
      state.priceGold = action.payload;
    });
    builder.addCase(getPriceGCoin.fulfilled, (state, action) => {
      state.priceCoin = action.payload;
    });
  },
});
export const getPriceGold = createAsyncThunk(
  "/rice/getPriceGold",
  async (data, { dispatch }) => {
    dispatch(showLoading());
    try {
      const { data } = await api.get(`/get-gold`);
      dispatch(hiddenLoading());
      return data;
    } catch (err) {
      console.log(err, "error");
      dispatch(hiddenLoading());
    }
  }
);
export const getPriceGCoin = createAsyncThunk(
  "/rice/getPriceGCoin",
  async (data, { dispatch }) => {
    dispatch(showLoading());

    try {
      const { data } = await api.get(`/get-coin`);
      dispatch(hiddenLoading());

      return data;
    } catch (err) {
      dispatch(hiddenLoading());

      console.log(err, "error");
    }
  }
);
export const { reducerName } = PriceSlice.actions;

export default PriceSlice.reducer;
