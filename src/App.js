import {Suspense, lazy, useEffect} from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import {authSelectors} from './redux/auth';
import {userOperations} from './redux/user';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import {Loader} from './components/Loader';
import {categoriesOperations} from './redux/categories';
import {transactionsOperations} from './redux/transactions';
import {walletsOperations} from './redux/wallets';
import {errorSelectors} from './redux/error'

import routes from './routes';
import {useToasts} from 'react-toast-notifications';
// import Balance from './components/Balance';

const Auth = lazy(() =>
	import('./pages/Auth/Auth' /* webpackChunkName: "auth" */)
);

const Transactions = lazy(() =>
	import(
		'./pages/Transactions/Transactions' /* webpackChunkName: "transactions" */
		)
);

const Categories = lazy(() =>
	import('./pages/Categories/Categories' /* webpackChunkName: "categories" */)
);

const Bills = lazy(() =>
	import('./pages/Bills/Bills' /* webpackChunkName: "bills" */)
);

const Report = lazy(() =>
	import('./pages/Report/Report' /* webpackChunkName: "reports" */)
);

function App() {
	const dispatch = useDispatch();
	const isAuth = useSelector(authSelectors.getIsAuthenticated);
	const {addToast} = useToasts();
	const error = useSelector(errorSelectors.getError);

	useEffect(() => {
		dispatch(userOperations.getCurrentUser());
		if (isAuth) {
			dispatch(categoriesOperations.fetchCategories());
			dispatch(transactionsOperations.fetchTransactions());
			dispatch(transactionsOperations.fetchSummary());
			dispatch(walletsOperations.fetchWallets());
		}
	}, [dispatch, isAuth]);

	useEffect(() => {
		if (error) {
			addToast(error, {appearance: 'error'})
		}
	}, [addToast, error]);

	return (
		<>
			<AppBar/>
			<Container>
				<Suspense fallback={<Loader/>}>
					<Switch>
						<PublicRoute exact path="/">
							<Redirect to={routes.auth}/>
						</PublicRoute>

						<PublicRoute
							path={routes.auth}
							restricted
							redirectTo={routes.transactions}
						>
							<Auth/>
						</PublicRoute>

						<PrivateRoute path={routes.transactions} redirectTo={routes.auth}>
							<Transactions/>
						</PrivateRoute>

						<PrivateRoute path={routes.categories} redirectTo={routes.auth}>
							<Categories/>
						</PrivateRoute>

						<PrivateRoute path={routes.bills} redirectTo={routes.auth}>
							<Bills/>
						</PrivateRoute>

						<PrivateRoute path={routes.report} redirectTo={routes.auth}>
							<Report/>
						</PrivateRoute>
					</Switch>
				</Suspense>
			</Container>
		</>
	);
}

export default App;
