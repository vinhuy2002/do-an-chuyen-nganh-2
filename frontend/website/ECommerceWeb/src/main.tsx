import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from "react-router-dom";
import router from './component/routes/router.tsx';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider direction="ltr">
          <RouterProvider router={router} />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
