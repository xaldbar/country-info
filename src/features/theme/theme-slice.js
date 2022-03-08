import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('country-info:theme') || 'light';

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    setTheme: (_, action) => {
      localStorage.setItem('country-info:theme', action.payload);
      return action.payload;
    },
  }
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
