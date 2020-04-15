import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './app/config/reactotronConfig';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

function App() {
  return(
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Routes />
            <ToastContainer autoClose={5000} /> 
          </>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
