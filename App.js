import React from 'react';
import Home from './Home';
import {Provider} from 'react-redux';
import {store} from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
