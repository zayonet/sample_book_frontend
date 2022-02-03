import React from 'react';

import 'antd/dist/antd.css';


import GlobalStyles from './styles/global'
import Routes from './routes'
import AppProvider from './context';

const App: React.FC = () => {
  return (
      <>
        <AppProvider>
            <Routes />
        </AppProvider>
        <GlobalStyles />
      </>
    );
}

export default App;