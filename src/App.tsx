import React from 'react';
import logo from './logo.svg';
import Layout from './components/layout';
import RoutingConfig from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <RoutingConfig />
        </Layout>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
