import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import auth from "./reducers/auth";
import ui from "./reducers/ui";
import main from "./reducers/main";

const rootReducer = combineReducers({
  auth: auth,
  main: main,
  ui: ui,
});

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store;
