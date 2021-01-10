import React from "react";
import "hammerjs";
import DrawerRouterContainer from "./layout/DrawerContainer.js";

import Register from "./auth/register";
import Login from "./auth/login";
import Logout from "./auth/logout";

import Dashboard from "./Dashboard";
import Dashboardch from "./Dashboardch";
import Dashboardpd from "./Dashboardpd";
import Dashboardrs from "./Dashboardrs";
import Dashboardts from "./Dashboardts";
import Dashboardfv from "./Dashboardfv";
import Dashboardcurves from "./Dashboardcurves";

import { HashRouter, Switch, Route} from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./PrivateRoute";

import "./App.scss";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  console.log(store.dispatch(setCurrentUser(decoded)))
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    console.log(decoded.exp)
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}
function App() {
  return (
    <Provider store={store}>
    <React.Fragment>
    <HashRouter>
        <DrawerRouterContainer >
            <Switch> 
                <PrivateRoute exact={true} path="/signals" component={Dashboard} />
                <PrivateRoute exact={true} path='/contract_history' component={Dashboardch} />
                <PrivateRoute exact={true} path='/price_delta' component={Dashboardpd} />
                <PrivateRoute exact={true} path='/term_structure' component={Dashboardts} />
                <PrivateRoute exact={true} path='/risk_spreads' component={Dashboardrs} />
                <PrivateRoute exact={true} path='/fair_value' component={Dashboardfv} />
                <PrivateRoute exact={true} path='/vol_curves' component={Dashboardcurves} />
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/logout" component={Logout} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </DrawerRouterContainer >
    </HashRouter>
    </React.Fragment>
    </Provider>
  );
}

export default App;


