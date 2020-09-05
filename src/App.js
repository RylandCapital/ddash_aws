import React from "react";
import "hammerjs";
import DrawerRouterContainer from "./layout/DrawerContainer.js";

import Dashboard from "./Dashboard";
import Dashboardch from "./Dashboardch";
import Dashboardpd from "./Dashboardpd";
import Dashboardrs from "./Dashboardrs";
import Dashboardts from "./Dashboardts";
import Dashboardfv from "./Dashboardfv";

import { HashRouter, Switch, Route } from 'react-router-dom';


import "./App.scss";

function App() {
  return (
    <React.Fragment>
    <HashRouter>
        <DrawerRouterContainer >
            <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route exact={true} path='/contract_history' component={Dashboardch} />
                <Route exact={true} path='/price_delta' component={Dashboardpd} />
                <Route exact={true} path='/term_structure' component={Dashboardts} />
                <Route exact={true} path='/risk_spreads' component={Dashboardrs} />
                <Route exact={true} path='/fair_value' component={Dashboardfv} />
            </Switch>
        </DrawerRouterContainer >
    </HashRouter>
    </React.Fragment>
  );
}

export default App;
