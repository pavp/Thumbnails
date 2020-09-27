import { 
  MAIN_SET_THUMBS, 
  MAIN_REMOVE_THUMBS,
} from '../../actionTypes'

const initialState = {
  thumbs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_SET_THUMBS:
      return {
        ...state,
        thumbs: action.thumbs
      };
    case MAIN_REMOVE_THUMBS:
      return {
        ...state,
        thumbs: []
      };
    default:
      return state;
  }
};
export default reducer;
