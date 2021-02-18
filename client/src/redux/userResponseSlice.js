import { createSlice } from "@reduxjs/toolkit";
import updateOptions from "./updateOptions";

const initialState = {
  s1: "",
  s2: "",
  s3: "",
  p1: "",
  p2: "",
  p3: "",
};

const userResponseSlice = createSlice({
  name: "userResponse",
  initialState,
  reducers: {
    setUserResponse: (state, action) => ({ ...state, verb: action.payload }),
    setTense: (state, action) => ({ ...state, tense: action.payload }),
    setMood: (state, action) => ({ ...state, mood: action.payload }),
    setPerson: (state, action) => ({ ...state, person: action.payload }),
  },
});

export const { setVerb, setTense, setMood, setPerson } = verbQuerySlice.actions;
export default verbQuerySlice;
