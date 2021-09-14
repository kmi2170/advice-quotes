import { ContentType } from '../api/types';

export const initState = {
  isLoading: true,
  isError: false,
  isButtonSelected: [true, false],
  selectedFetcher: undefined,
  content: null,
  category: '',
  wallpaper: false,
};

export type StateType = {
  isLoading: boolean;
  isError: boolean;
  isButtonSelected: [boolean, boolean];
  selectedFetcher: boolean;
  content: ContentType;
  category: string;
  wallpaper: null | boolean;
};
