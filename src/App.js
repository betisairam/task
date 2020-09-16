import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <br />Demo
    </div>
    </Provider>
  );
}

export default App;
