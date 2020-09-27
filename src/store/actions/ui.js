import { 
  UI_START_LOADING_GENERATE, 
  UI_STOP_LOADING_GENERATE,
} from '../actionTypes';


export const uiStartLoadingGenerate = () => ({
  type: UI_START_LOADING_GENERATE
});

export const uiStopLoadingGenerate = () => ({
  type: UI_STOP_LOADING_GENERATE
});
