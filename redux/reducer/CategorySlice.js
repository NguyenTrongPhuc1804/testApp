import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/baseService";
import { hiddenLoading, showLoading } from "./LoadingSlice";
const initialState = {
  isLoading: false,
  hello: 1,
  listCategory: [],
  listArticle: [],
  dataArticle: [],
};

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    reducerName: (state, action) => {
      state.hello += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryApi.fulfilled, (state, action) => {
      state.listCategory = action.payload;
    });
    builder.addCase(getArticleCategory.fulfilled, (state, action) => {
      state.listArticle = [...action.payload, ...state.listArticle];
    });
    builder.addCase(getAllArticleCategory.fulfilled, (state, action) => {
      state.dataArticle = action.payload;
    });
  },
});
export const getCategoryApi = createAsyncThunk(
  "/category/getAll",
  async ({ limit = 10, offset = 0, ...rest }, { dispatch }) => {
    dispatch(showLoading());
    try {
      const { data } = await api.get("/categories_news", {
        params: {
          limit,
          offset,
          ...rest,
        },
      });
      dispatch(hiddenLoading());

      return data;
    } catch (err) {
      console.log(err, "error");
    }
  }
);
export const getArticleCategory = createAsyncThunk(
  "/category/getArticleCategory",
  async ({ id = 1, limit = 1, ...rest }, thunkApi) => {
    try {
      const { data } = await api.get(`/categories_news/${id}/articles`, {
        params: {
          id,
          limit,
          ...rest,
        },
      });
      return data;
    } catch (err) {
      console.log(err, "error");
    }
  }
);
export const getAllArticleCategory = createAsyncThunk(
  "/category/getAllArticleCategory",
  async ({ id = 1, limit = 40, ...rest }, thunkApi) => {
    try {
      const { data } = await api.get(`/categories_news/${id}/articles`, {
        params: {
          id,
          limit,
          ...rest,
        },
      });
      return data;
    } catch (err) {
      console.log(err, "error");
    }
  }
);
export const { reducerName } = CategorySlice.actions;

export default CategorySlice.reducer;
