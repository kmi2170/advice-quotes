import { ContentType } from '../api/types';

export const initState = {
  isLoading: true,
  isError: false,
  isButtonSelected: [true, false],
  content: undefined,
  category: 'all',
  wallpaper: false,
};

export type StateType = {
  isLoading: boolean;
  isError: boolean;
  isButtonSelected: boolean[];
  content: undefined | ContentType;
  category: string;
  wallpaper: null | boolean;
};
