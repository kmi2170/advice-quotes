import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContentType } from "../api/types";
import { RootState } from "../app/store";
import { fetchAdviceQuote } from "./adviceAsync";

export type AdviceState = {
  isLoading: boolean;
  isError: boolean;
  isButtonSelected: null | boolean[];
  content: undefined | ContentType;
  category: string;
  wallpaper: null | boolean;
};

export const initialState: AdviceState = {
  isLoading: false,
  isError: false,
  isButtonSelected: null,
  content: undefined,
  category: "all",
  wallpaper: false,
};

export const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setIsButtonSelected: (state, action: PayloadAction<boolean[]>) => {
      state.isButtonSelected = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setContent: (state, action: PayloadAction<undefined | ContentType>) => {
      state.content = action.payload;
    },
    setWallpaper: (state, action: PayloadAction<null | boolean>) => {
      state.wallpaper =
        action.payload === null ? !state.wallpaper : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdviceQuote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdviceQuote.fulfilled, (state) => {
        console.log("fullfilled");
        state.isLoading = false;
      })
      .addCase(fetchAdviceQuote.rejected, (state, error) => {
        state.isLoading = false;
        state.isError = true;
        console.log(error);
      });
  },
});

export const selectAdvice = (state: RootState) => state.advice;

export const {
  setIsLoading,
  setIsError,
  setIsButtonSelected,
  setContent,
  setCategory,
  setWallpaper,
} = adviceSlice.actions;

export default adviceSlice.reducer;
