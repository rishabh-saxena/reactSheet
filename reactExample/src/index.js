import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Home from './Home.jsx';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
    <Route path='/:para' component={App}/>
   </Router> 
    ,
  document.getElementById('root')
);
