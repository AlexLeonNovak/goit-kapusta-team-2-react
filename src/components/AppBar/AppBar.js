import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navigation from "../Nav/Nav";
import Balance from "../Balance";
import UserMenu from "../UserMenu/UserMenu";
import s from "../AppBar/AppBar.module.scss";
import logo from "../../base/images/desktop/logo.png";

import { authSelectors } from "../../redux/auth";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={s.header}>
     
       {isLoggedIn ?  <Navigation /> : <NavLink className={s.logoLink} to="/">
        <div><img src={logo} alt="Logo"/></div>
      </NavLink>}
 
      {isLoggedIn ? <Balance /> : null}

      {isLoggedIn ? <UserMenu /> : null}
    </div>
  );
}
