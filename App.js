import React from 'react';
import App from './src/navigation';
import reduxStore from './src/store';
import { Provider } from 'react-redux';

const store = reduxStore()

function GenerateThumbnails() {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default GenerateThumbnails;
