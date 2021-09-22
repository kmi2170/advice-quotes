import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType } from '../api/types';

export type AdviceState = {
  isLoading: boolean;
  isError: boolean;
  isButtonSelected: null | boolean[];
  content: undefined | ContentType;
  category: string;
  wallpaper: null | boolean;
};

export const initialState: AdviceState = {
  isLoading: true,
  isError: false,
  isButtonSelected: null,
  content: undefined,
  category: 'all',
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
});

export const {
  setIsLoading,
  setIsError,
  setIsButtonSelected,
  setContent,
  setCategory,
  setWallpaper,
} = adviceSlice.actions;

export default adviceSlice.reducer;
