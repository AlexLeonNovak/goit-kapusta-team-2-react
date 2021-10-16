import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations, authSelectors } from "./redux/auth";
import { userOperations} from "./redux/user";


import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";
import { Loader } from "./components/Loader";
import {categoriesOperations} from './redux/categories';
import { transactionsOperations } from './redux/transactions';


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

const Report = lazy(() =>
  import("./pages/Report/Report" /* webpackChunkName: "reports" */)
);

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuthenticated);

  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
    if (isAuth) {
      dispatch(categoriesOperations.fetchCategories());
      dispatch(transactionsOperations.fetchTransactions());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
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
            <Report />
          </PrivateRoute>
        </Switch>
      </Suspense>
      {/* <Summary /> */}
      {/* TODO раскоментить после добавления expensee and income <Summary /> */}
    </>
  );
}

export default App;
