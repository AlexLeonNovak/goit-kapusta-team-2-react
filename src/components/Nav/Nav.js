import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth.selectors';
import s from "../Nav/Nav.module.scss";
import logo from '../../base/images/desktop/logo.png'
import  minmobile from '../../base/sass/main.scss';



export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  
  //const logo = '../../base/images/desktop/logo.png';

return (
  <nav className={ s.flexContainer}>
    <NavLink to="/" exact className={s.link} >
    <div>

        <img src={logo}
               sizes='(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw'
        alt='Logo' />
  </div>
    </NavLink>
   
    {/* {isLoggedIn && ( <NavLink
      to="/categories"
      exact>
      {`${minmobile}` ?   <span className={s.category}>Категории</span> : <span  className={s.categoryIcon}></span>}
      
     
    </NavLink>) } */}
     {isLoggedIn && (<NavLink
      to="/transactions"
      exact>
      <span className={s.category}>Транзакции</span>
      <span  className={s.categoryIcon}></span>
    </NavLink> )}
     {isLoggedIn &&(<NavLink
      to="/reports"
      exact>
      <span className={s.category}>Отчеты</span>
      <span  className={s.categoryIcon}></span>
    </NavLink>)}

  </nav>
);
    }
