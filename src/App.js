import {Suspense, lazy, useEffect} from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import {authSelectors} from './redux/auth';
import {userOperations} from './redux/user';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import AuthContainer from './components/ContainerAuth';
import {Loader} from './components/Loader';
import {categoriesOperations} from './redux/categories';
import {transactionsOperations} from './redux/transactions';
import {walletsOperations} from './redux/wallets';
import {toastSelectors} from './redux/toast'

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
	const toast = useSelector(toastSelectors.getToast);

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
		if (toast) {
			addToast(toast.message, {appearance: toast.type})
		}
	}, [addToast, toast]);

	return (
		<>
			<AppBar/>

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
						<AuthContainer>
							<Auth/>
						</AuthContainer>
					</PublicRoute>


					<PrivateRoute path={routes.transactions} redirectTo={routes.auth}>
						<Container>
							<Transactions/>
						</Container>
					</PrivateRoute>

					<PrivateRoute path={routes.categories} redirectTo={routes.auth}>
						<Container>
							<Categories/>
						</Container>
					</PrivateRoute>

					<PrivateRoute path={routes.bills} redirectTo={routes.auth}>
						<Container>
							<Bills/>
						</Container>
					</PrivateRoute>

					<PrivateRoute path={routes.report} redirectTo={routes.auth}>
						<Container>
							<Report/>
						</Container>
					</PrivateRoute>

				</Switch>
			</Suspense>

		</>
	);
}

export default App;
