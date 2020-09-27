import { 
  UI_START_LOADING_GENERATE, 
  UI_STOP_LOADING_GENERATE,
} from '../../actionTypes';

const initialState = {
  isLoadingGenerate: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING_GENERATE:
      return {
        ...state,
        isLoadingGenerate: true
      };
    case UI_STOP_LOADING_GENERATE:
      return {
        ...state,
        isLoadingGenerate: false
      };
    default:
      return state;
  }
};
export default reducer;
