import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={SignUp}/>
  </Route>
)

/* 
  TODO:
    Home (default)
    Signup
    Login 
    Games
      Games/:gameId
*/
    