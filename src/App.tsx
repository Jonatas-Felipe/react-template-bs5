import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from '~/routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <HttpsRedirect disabled={process.env.NODE_ENV === 'development'}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </HttpsRedirect>
  );
};


export default App;
