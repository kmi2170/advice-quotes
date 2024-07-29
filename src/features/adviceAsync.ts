import { createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "../app/store";
import { setContent } from "./adviceSlice";
import { fetchAdviceSlip } from "../api/lib/fetchAdvice";

export const fetchAdvice = createAsyncThunk(
  "advice/fetchAdviceQuote",
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      // const { advice } = getState() as RootState;
      // console.log(advice);
      const content = await fetchAdviceSlip();
      dispatch(setContent(content));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
