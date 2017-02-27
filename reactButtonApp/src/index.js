import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
    <Route path='/:comp' component={App}/>
  </Router>  ,
  document.getElementById('root')
);
