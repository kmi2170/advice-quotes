import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import adviceReducer from '../features/adviceSlice';

export const store = configureStore({
  reducer: { advice: adviceReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
