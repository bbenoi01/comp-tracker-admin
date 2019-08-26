import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import jwtDecode from 'jwt-decode';

import { Provider } from 'react-redux';
import rootStore from './rootStore';
import { types } from './types/types';
import { logoutUser } from './components/Navbar/actions';
import { getUserData } from './containers/Login/actions';

import Navbar from './components/Navbar';
import AuthRoute from './util/authRoute';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';
import axios from 'axios';

axios.defaults.baseURL = "https://us-central1-comptracker-7d3f8.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp * 1000 < Date.now()) {
    rootStore.dispatch(logoutUser());
  } else {
    rootStore.dispatch({ type: types.SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    rootStore.dispatch(getUserData());
  }
}

function App() {
    return (
        <Provider store={rootStore}>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                <AuthRoute exact path="/" component={Login}/>
                <AuthRoute exact path="/signup" component={Signup}/>
                <Route exact path="/home" component={Home}/>
              </Switch>
            </div>
          </Router>
        </Provider>
    );
}

export default App;