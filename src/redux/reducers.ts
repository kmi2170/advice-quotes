import { combineReducers } from 'redux';
import { initialState, State } from './initialState';
import { actionTypes as types, Actions } from './actionTypes';

export const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case types.SET_IS_ERROR:
      return { ...state, isError: action.payload };
    case types.SET_IS_BUTTON_SELECTED:
      return { ...state, isButtonSelected: action.payload };
    case types.SET_CONTENT:
      return { ...state, content: action.payload };
    case types.SET_CATEGORY:
      return { ...state, category: action.payload };
    case types.SET_WALLPAPER:
      console.log(action.payload);
      return action.payload === null
        ? { ...state, wallpaper: !state.wallpaper }
        : { ...state, wallpaper: action.payload };
    default:
      return state;
  }
};

export default reducer;
// const reducers = {
//   reducer,
// };
// export default combineReducers(reducers);
