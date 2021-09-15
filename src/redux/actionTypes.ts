import { ContentType } from '../api/types';

export enum actionTypes {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_IS_ERROR = 'SET_IS_ERROR',
  SET_IS_BUTTON_SELECTED = 'SET_IS_BUTTON_SELECTED',
  SET_CONTENT = 'SET_CONTENT',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_WALLPAPER = 'SET_WALLPAPER',
}

type Payload = {
  [actionTypes.SET_IS_LOADING]: boolean;
  [actionTypes.SET_IS_ERROR]: boolean;
  [actionTypes.SET_IS_BUTTON_SELECTED]: boolean[];
  [actionTypes.SET_CONTENT]: undefined | ContentType;
  [actionTypes.SET_CATEGORY]: string;
  [actionTypes.SET_WALLPAPER]: null | boolean;
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];
