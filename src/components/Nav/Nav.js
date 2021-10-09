import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth.selectors';
import s from "../Nav/Nav.module.scss";
import logo from '../../base/images/desktop/logo.png'
import  minmobile from '../../base/sass/main.scss';
import { fallDown as Menu } from 'react-burger-menu';



export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  
  const showMenu = e => {
    e.preventDefault();
  }
return (
  <nav className={s.flexContainer}>
   
    <NavLink to="/" exact className={s.link} >
    <div>

        <img src={logo}
               sizes='(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw'
        alt='Logo' />
  </div>
    </NavLink>
   
    {isLoggedIn && ( <NavLink
      to="/categories"
      exact>
      <span className={s.category}>Категории</span>
      
      
      <div className={s.categoryIcon}>  
  <Menu  className={s.menu}>
  
    <a id="categories" className={s.menuItem} href="/categories">Категории</a>
        <a id="transactions" className={s.menuItem} href="/transactions">Транзакции</a>
        <a id="reports" className={s.menuItem} href="/reports" onClick={ showMenu } >Отчеты</a>
        </Menu>
        
</div>
    
     
    </NavLink>) }
     {isLoggedIn && (<NavLink
      to="/transactions"
      exact>
      <span className={s.category}>Транзакции</span>
     
    </NavLink> )}
     {isLoggedIn &&(<NavLink
      to="/reports"
      exact>
      <span className={s.category}>Отчеты</span>
    
    </NavLink>)}

  </nav>
);
    }
