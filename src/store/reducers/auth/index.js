import { 
  AUTH_SET_TOKEN, 
  AUTH_REMOVE_TOKEN, 
} from '../../actionTypes'

const initialState = {
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case AUTH_REMOVE_TOKEN:
      return {
        token: null
      };
    default:
      return state;
  }
};
export default reducer;
