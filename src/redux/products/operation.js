import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1';

export const products = createAsyncThunk(
  'products',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
