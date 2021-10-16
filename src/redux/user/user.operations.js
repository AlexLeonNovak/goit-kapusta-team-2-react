import axios from 'axios';
import { userActions } from './index';


//axios.defaults.baseURL = 'http://localhost:3000';
const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const getCurrentUser = () => async (dispatch, getState) => {
	const {
		auth: {token: persistedToken},
	} = getState();

	if (!persistedToken) {
		return;
	}
	token.set(persistedToken);
	dispatch(userActions.getCurrentUserRequest());
	try {
		const response = await axios.get('/user/current');

		dispatch(userActions.getCurrentUserSuccess(response.data.data));
	} catch (error) {
		dispatch(userActions.getCurrentUserError(error.message));
	}
};

export const updateBalance = (balance) => async (dispatch) => {

	dispatch(userActions.updateBalanceRequest());
	try {
		const response = await axios.patch('/user', {balance})
		dispatch(userActions.updateBalanceSuccess(response.data.data))
	} catch (error) {
		dispatch(userActions.updateBalanceError(error.message))
	}
}
