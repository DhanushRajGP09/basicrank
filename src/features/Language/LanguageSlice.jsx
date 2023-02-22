import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "Language",
  initialState: {
    Languages: [],
  },
  reducers: {
    addLanguage: (state, { payload }) => {
      let isPresent = false;
      for (let item of state.Languages) {
        if (item === payload) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        state.Languages.unshift(payload);
      }
    },

    removeFromLanguage: (state, action) => {
      state.Languages = state.Languages.filter(
        (data) => data !== action.payload
      );
    },
  },
});

export const { addLanguage, removeFromLanguage } = LanguageSlice.actions;

export const getLanguages = (state) => state.Language.Languages;

export default LanguageSlice.reducer;
