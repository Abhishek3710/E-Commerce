import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  return storedDarkMode ? JSON.parse(storedDarkMode) : false;
};

const initialState = {
  isLoading: false,
  darkMode: getInitialDarkMode(),
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setDarkMode: (state) => {
        localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
        (state.darkMode = !state.darkMode);
    },
  },
});

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;
