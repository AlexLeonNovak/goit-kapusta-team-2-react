import axios from 'axios';
import { userActions } from './index';
import { toastActions } from '../toast'

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
		dispatch(toastActions.errorMessage(`Get current user error: ${error.message}`));
	}
};

