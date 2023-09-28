import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [
    { id: 1, type: "grid", status: true },
    { id: 2, type: "grid", status: true },
    { id: 3, type: "grid", status: true },
  ],
};

export const SettingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    settingHome: (state, action) => {
      if (!action.payload.type) {
        action.payload.type = "grid";
      }
      let index = state.home.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.home[index].status = action.payload.status;
        state.home[index].type = action.payload.type;
      } else {
        state.home = [...state.home, action.payload];
      }
    },
  },
});

export const { settingHome } = SettingSlice.actions;

export default SettingSlice.reducer;
