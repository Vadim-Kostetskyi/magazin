import { createSlice } from '@reduxjs/toolkit';
import { products } from './operation';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'userDaily',
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchDaily.fulfilled]: (state, action) => {
    //   const notAllowedProducts = action.payload.notAllowedProducts;
    //   state.dailyRate = action.payload.dailyRate;
    //   state.notAllowedProducts = notAllowedProducts;
    // },
    [products.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categorySlice.reducer;
