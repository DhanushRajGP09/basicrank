import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./Language/LanguageSlice";
import TestReducer from "./Test/TestSlice";

export const store = configureStore({
  reducer: {
    Language: LanguageReducer,
    Test: TestReducer,
  },
});
