import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availablePlans: { basic: null, esencial: null, pro: null },
  plansPrice: { basic: 0, esencial: 255, pro: 615 },
  agent: { country: 'MX' },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAvailablePlans(state, action) {
      state.availablePlans = action.payload;
    },
    setPrices(state, action) {
      state.plansPrice = action.payload;
    },
    setAppAgent(state, action) {
      state.agent = action.payload;
    },
  },
});

export const { setAvailablePlans, setPrices, setAppAgent } = appSlice.actions;

export default appSlice.reducer;

export const verifyClientCountry = (result) => async (dispatch) => {
  try {
    const country = result?.location?.country?.code ?? 'MX';
    dispatch(setAppAgent({ country }));
  } catch (error) {
    dispatch(setAppAgent({ country: 'MX' }));
  }
};
