import { combineReducers } from 'redux';
import { initialState, StateType } from './initialState';
import { actionTypes as types, ActionsType } from './actionTypes';

export const reducer = (
  state: StateType = initialState,
  action: ActionsType
) => {
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
      return action.payload
        ? { ...state, wallpaper: action.payload }
        : { ...state, wallpaper: !state.wallpaper };
    default:
      return state;
  }
};

export default reducer;
// const reducers = {
//   reducer,
// };
// export default combineReducers(reducers);
