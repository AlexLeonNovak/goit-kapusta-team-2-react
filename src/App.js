import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';
import { useDispatch } from 'react-redux';

import authOperations from './redux/auth/auth.operations';

import Header from './pages/Header/Header';

const Auth = lazy(() =>
	import('./pages/Auth/Auth' /* webpackChunkName: "auth" */),
);

const Transactions = lazy(() =>
	import('./pages/Transactions/Transactions' /* webpackChunkName: "transactions" */),
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
        </Switch>        
      </Suspense>
    </>
  );
}

export default App;
