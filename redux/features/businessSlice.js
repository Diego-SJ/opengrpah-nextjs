import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  utmParams: null,
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setUtmParams(state, action) {
      state.utmParams = action.payload;
    },
  },
});

export const { setUtmParams } = businessSlice.actions;

export default businessSlice.reducer;
