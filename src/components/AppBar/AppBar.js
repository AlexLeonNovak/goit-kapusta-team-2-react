import React from 'react';
import {useSelector} from 'react-redux';
import Navigation from '../Nav/Nav';
import Balance from '../Balance';
import UserMenu from '../UserMenu/UserMenu';
import s from '../AppBar/AppBar.module.scss';

import {authSelectors} from '../../redux/auth';
import logo from '../../base/images/desktop/logo.png';
import {NavLink} from 'react-router-dom';

export default function AppBar() {
	const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

	return (
		<div className={s.header}>
			<div className={s.nav}>
				{isLoggedIn && <Navigation/> }
				<NavLink className={s.logoLink} to="/">
					<div><img src={logo} alt="Logo"/></div>
				</NavLink>
			</div>
			{isLoggedIn && (
				<div className={s.userData}>
					<Balance className={s.hideOnMobile}/>
					<UserMenu/>
				</div>
			)}
		</div>
	);
}
