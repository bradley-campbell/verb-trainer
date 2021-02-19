import { createSlice } from "@reduxjs/toolkit";
import updateOptions from "./updateOptions";

const initialState = {
  query: {
    verb: "",
    mood: "Indicatif",
    tense: "Présent",
    person: "1s",
  },
  userResponse: {
    s1: "",
    s2: "",
    s3: "",
    p1: "",
    p2: "",
    p3: "",
  },
  options: {
    mood: ["Indicatif", "Conditionnel", "Subjonctif", "Imperatif"],
    tense: ["Présent", "Imparfait", "PasséSimple", "Futur"],
    person: [
      { label: "Je", value: "1s" },
      { label: "Tu", value: "2s" },
      { label: "Il/Elle/On", value: "3s" },
      { label: "Nous", value: "1s" },
      { label: "Vous", value: "1s" },
      { label: "Ils/Elles", value: "1s" },
    ],
  },
};

const verbQuerySlice = createSlice({
  name: "verbQuery",
  initialState,
  reducers: {
    setVerb: (state, action) => ({
      ...state,
      query: { ...state.query, verb: action.payload },
    }),
    setTense: (state, action) => ({
      ...state,
      query: { ...state.query, tense: action.payload },
    }),
    setMood: (state, action) => ({ ...state, mood: action.payload }),
    setPerson: (state, action) => ({
      ...state,
      query: { ...state.query, person: action.payload },
    }),
    setUserResponse: (state, action) => ({
      ...state,
      userResponse: action.payload,
    }),
    setOptions: (state) => ({
      ...state,
      options: updateOptions(state.query),
    }),
  },
});

export const {
  setVerb,
  setTense,
  setMood,
  setPerson,
  setUserResponse,
  setOptions,
} = verbQuerySlice.actions;
export default verbQuerySlice.reducer;
