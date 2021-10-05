import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from "../Nav/Nav.module.scss";
import logo from '../../base/images/desktop/logo.png'



export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  //const logo = '../../base/images/desktop/logo.png';

return (
  <nav>
    <NavLink to="/" exact className={s.link} >
    <div>

        <img src={logo}
               sizes='(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw'
        alt='Logo' />
  </div>
    </NavLink>

    {/* {isLoggedIn && (<NavLink
      to="/balance"
      exact
      style={s.link}
      activeStyle={s.activeLink}
    >
     Balance
    </NavLink> ) } */}
  </nav>
);
    }