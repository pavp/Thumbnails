import AsyncStorage from '@react-native-community/async-storage';

import { 
  AUTH_SET_TOKEN, 
  AUTH_REMOVE_TOKEN, 
} from '../actionTypes'

import { mainRemoveThumbs } from './index.js';

export const authSetToken = (data) => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(data));
      dispatch(authSetUser(data));
    } catch (e) {
      console.log('error', e)
    }
  }
};

export const authSetUser = (data) => {
  return {
    type: AUTH_SET_TOKEN,
    token: data
  };
};

export const authRemoveToken = () => {
    return async dispatch => {
      try {
        await AsyncStorage.removeItem('token');
        dispatch(authRemoveUser());
        dispatch(mainRemoveThumbs());
      } catch(e) {
        console.log(e)
      }
    }
}

export const authRemoveUser = () => {
  return {
    type: AUTH_REMOVE_TOKEN
  };
};