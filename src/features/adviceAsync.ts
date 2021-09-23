import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { setContent } from './adviceSlice';

import { ContentType } from '../api/types';
import { fetchAdvice } from '../api/lib/fetchAdvice';
import { fetchQuotes } from '../api/lib/fetchQuotes';

export const fetchAdviceQuote = createAsyncThunk(
  'advice/fetchAdviceQuote',
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const { advice } = getState() as RootState;
      console.log(advice);

      let content: ContentType;
      if (advice.isButtonSelected[0]) {
        content = await fetchAdvice();
      } else if (advice.isButtonSelected[1]) {
        content =
          advice.category === 'all'
            ? await fetchQuotes()
            : await fetchQuotes(advice.category);
      }

      dispatch(setContent(content));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
