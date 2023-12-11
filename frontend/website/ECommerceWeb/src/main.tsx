import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from "react-router-dom";
import router from './component/routes/router.tsx';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider direction="ltr">
      <RouterProvider router={router}/>
    </ConfigProvider>
  </React.StrictMode>
)
