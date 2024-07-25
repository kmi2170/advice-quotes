import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { fetchAdvice } from "./adviceAsync";

export type AdviceState = {
  isLoading: boolean;
  isError: boolean;
  isTypeButtonSelected: boolean[];
  content: string | null;
  quoteCategory: string;
  wallpaper: boolean | null;
};

export const initialState: AdviceState = {
  isLoading: false,
  isError: false,
  isTypeButtonSelected: [true, false],
  content: null,
  quoteCategory: "all",
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
    setContent: (state, action: PayloadAction<string | null>) => {
      state.content = action.payload;
    },
    setWallpaper: (state, action: PayloadAction<null | boolean>) => {
      state.wallpaper =
        action.payload === null ? !state.wallpaper : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvice.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAdvice.rejected, (state, error) => {
        state.isLoading = false;
        state.isError = true;
        console.error(error);
      });
  },
});

export const selectAdvice = (state: RootState) => state.advice;

export const { setIsLoading, setIsError, setContent, setWallpaper } =
  adviceSlice.actions;

export default adviceSlice.reducer;
