import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogList(state, action) {
      state.list = action.payload;
    }
  }
});

export const { setBlogList } = blogSlice.actions;
export default blogSlice.reducer;
