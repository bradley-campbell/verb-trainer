import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conjugated: "",
  results: "",
  verbTable: {},
};

const verbDataSlice = createSlice({
  name: "verbData",
  initialState,
  reducers: {
    setConjugated: (state, action) => ({
      ...state,
      conjugated: action.payload,
    }),
    setResults: (state, action) => ({
      ...state,
      results: action.payload,
    }),
    setVerbTable: (state, action) => ({
      ...state,
      verbTable: action.payload,
    }),
  },
});

export const {
  setConjugated,
  setResults,
  setVerbTable,
} = verbDataSlice.actions;
export default verbDataSlice.reducer;
