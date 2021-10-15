import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Reports from "./components/Reports/Reports";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import authOperations from "./redux/auth/auth.operations";
import routes from "./routes";
import AppBar from './components/AppBar/AppBar';
import {Loader} from './components/Loader';

const Auth = lazy(() =>
  import("./pages/Auth/Auth" /* webpackChunkName: "auth" */)
);

const Transactions = lazy(() =>
  import(
    "./pages/Transactions/Transactions" /* webpackChunkName: "transactions" */
  )
);

const Categories = lazy(() =>
  import("./pages/Categories/Categories" /* webpackChunkName: "categories" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <PublicRoute exact path="/">
            <Redirect to={routes.auth} />
          </PublicRoute>

          <PublicRoute
            path={routes.auth}
            restricted
            redirectTo={routes.transactions}
          >
            <Auth />
          </PublicRoute>

          <PrivateRoute path={routes.transactions} redirectTo={routes.auth}>
            <Transactions />
          </PrivateRoute>

          <PrivateRoute path={routes.categories} redirectTo={routes.auth}>
            <Categories />
          </PrivateRoute>

          <PrivateRoute path={routes.report} redirectTo={routes.auth}>
            <Reports />
          </PrivateRoute>
        </Switch>
      </Suspense>
      {/* <Summary /> */}
      {/* TODO раскоментить после добавления expensee and income <Summary /> */}
    </>
  );
}

export default App;
