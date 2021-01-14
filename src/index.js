import React from 'react'; // main library
import ReactDOM from 'react-dom'; //reactdom manages the rendering part
import { BrowserRouter} from 'react-router-dom';
import { App } from './components';
import './index.css';
import UserProvider from './providers/UserProvider';

ReactDOM.render(
  <UserProvider data="1">
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);
