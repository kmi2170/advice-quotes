import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType } from '../api/types';
import { RootState } from '../app/store';
import { fetchAdviceQuote } from './adviceAsync';

export type AdviceState = {
  isLoading: boolean;
  isError: boolean;
  isTypeButtonSelected: boolean[];
  content: undefined | ContentType;
  quoteCategory: string;
  wallpaper: null | boolean;
};

export const initialState: AdviceState = {
  isLoading: false,
  isError: false,
  isTypeButtonSelected: [true, false],
  content: undefined,
  quoteCategory: 'all',
  wallpaper: false,
};

export const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setIsButtonSelected: (state, action: PayloadAction<boolean[]>) => {
      state.isTypeButtonSelected = action.payload;
    },
    setQuoteCategory: (state, action: PayloadAction<string>) => {
      state.quoteCategory = action.payload;
    },
    setContent: (state, action: PayloadAction<undefined | ContentType>) => {
      state.content = action.payload;
    },
    setWallpaper: (state, action: PayloadAction<null | boolean>) => {
      state.wallpaper =
        action.payload === null ? !state.wallpaper : action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdviceQuote.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdviceQuote.fulfilled, state => {
        console.log('fullfilled');
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
  setQuoteCategory,
  setWallpaper,
} = adviceSlice.actions;

export default adviceSlice.reducer;
