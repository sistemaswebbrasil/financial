import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import BillingCycle from "../billingCycle/BillingCycle";
import AuthOrApp from "./AuthOrApp";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Switch>
);
