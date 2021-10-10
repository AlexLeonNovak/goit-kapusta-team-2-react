import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import authOperations from "./redux/auth/auth.operations";
import Header from "./pages/Header/Header";
// import Summary from "./components/Summary/Summary";
import Reports from "./components/Reports/Reports";

import routes from "./routes";
// import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const Auth = lazy(() =>
  import("./pages/Auth/Auth" /* webpackChunkName: "auth" */)
);

const Transactions = lazy(() =>
  import(
    "./pages/Transactions/Transactions" /* webpackChunkName: "transactions" */
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Загружаемся ребята...</h1>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/auth" />
          </Route>
          <Route path={routes.auth} component={Auth} />
          <Route path={routes.transactions} component={Transactions} />

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

          {/* <PrivateRoute path={routes.transactions} redirectTo={routes.auth}> */}
          <Transactions />
          {/* </PrivateRoute> */}

          {/* TODO Расскоментить, после добавления компонента */}
          {/* <PrivateRoute path={routes.categories} redirectTo={routes.auth}>
            <Categories/>
  </PrivateRoute>*/}

          {/* <PrivateRoute path={routes.reports} redirectTo={routes.auth}> */}
          <Reports />
          {/* </PrivateRoute> */}
        </Switch>
      </Suspense>
      {/* <Summary /> */}
      {/* TODO раскоментить после добавления expensee and income <Summary /> */}
    </>
  );
}

export default App;
