import { StateType } from './initState';
import { actionTypes, ActionsType } from './actionTypes';

export const reducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case actionTypes.SET_IS_ERROR:
      return { ...state, isError: action.payload };
    case actionTypes.SET_IS_BUTTON_SELECTED:
      return { ...state, isButtonSelected: action.payload };
    case actionTypes.SET_SELECTED_FETCHER:
      return { ...state, selectedFetcher: action.payload };
    case actionTypes.SET_CONTENT:
      return { ...state, content: action.payload };
    case actionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case actionTypes.SET_WALLPAPER:
      return action.payload
        ? { ...state, wallpaper: action.payload }
        : { ...state, wallpaper: !state.wallpaper };
    default:
      return state;
  }
};

export default reducer;
