import { mainSetThumbs, 
        uiStopLoadingGenerate, 
        uiStartLoadingGenerate, } from '../store/actions';

export const mainFetchThumbs = (data) => {
  return (dispatch) => {
    dispatch(uiStartLoadingGenerate());
    this.setTimeout( () => {
      dispatch(mainSetThumbs(['url1', 'url2', 'url3']))
      dispatch(uiStopLoadingGenerate());
    }, 2000);
    
  };
};  