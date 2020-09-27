import { 
  MAIN_SET_THUMBS, 
  MAIN_REMOVE_THUMBS,
} from '../actionTypes';

import { 
  mainFetchThumbs, 
} from '../../services/main';

export const tryThumbs = (data) => {
  return dispatch => {
    dispatch(mainFetchThumbs(data));
  }
};

export const mainSetThumbs = (data) => {
  return {
    type: MAIN_SET_THUMBS,
    thumbs: data
  };
};

export const mainRemoveThumbs = () => {
  return {
    type: MAIN_REMOVE_THUMBS
  };
};
