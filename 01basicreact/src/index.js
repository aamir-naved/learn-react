import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyComp from './MyComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyComp/>

  </React.StrictMode>
);

