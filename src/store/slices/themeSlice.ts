import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
  primaryColor: string;
  accentColor: string;
}

const initialState: ThemeState = {
  darkMode: false,
  primaryColor: '#1976d2',
  accentColor: '#dc004e',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setAccentColor: (state, action: PayloadAction<string>) => {
      state.accentColor = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode, setPrimaryColor, setAccentColor } = themeSlice.actions;
export default themeSlice.reducer;