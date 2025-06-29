import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from './store/store.js';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
   </Provider>
  </StrictMode>,
)
