import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import StoreHome from "../Pages/StoreHome";
import ContactUs from "../Form/ContactUs";
import Error from "../Error/Error";
import Header from '../Pages/Header';

const StoreRoutes: React.FC = () => {
  return (
    <Router>
      <div>
      <Header />
        <Switch>
          <Redirect exact={true} from="/" to="/home" />
          <Route path="/home" component={StoreHome} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default StoreRoutes;
