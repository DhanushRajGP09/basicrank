import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./Language/LanguageSlice";

export const store = configureStore({
  reducer: {
    Language: LanguageReducer,
  },
});
