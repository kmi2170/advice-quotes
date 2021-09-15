import { ContentType } from '../api/types';

export const initialState: StateType = {
  isLoading: true,
  isError: false,
  isButtonSelected: null,
  content: undefined,
  category: 'all',
  wallpaper: false,
};

export type StateType = {
  isLoading: boolean;
  isError: boolean;
  isButtonSelected: null | boolean[];
  content: undefined | ContentType;
  category: string;
  wallpaper: null | boolean;
};
