import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Nav/Nav';
import UserMenu from '../UserMenu/UserMenu';
import s from "../AppBar/AppBar.module.scss";

import  authSelectors  from '../../redux/Auth/auth-selectors';


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={s.header}>
      <Navigation />
      {/* <UserMenu />  */}
      {isLoggedIn ? <UserMenu /> : null}
    </div>
  );
}