import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import s from '../Nav/Nav.module.scss';
import logo from '../../base/images/desktop/logo.png'
import closeImg from '../../base/images/svg_black/close.svg';
import sprite from '../../base/images/sprite.svg';
import authSelectors from '../../redux/auth/auth.selectors';
import routes from '../../routes'
import classNames from 'classnames';


export default function Navigation() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const buttonMenuToggle = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	return (
		<nav className={s.menuWrapper}>

			<button className={s.menuBtnToggle} onClick={buttonMenuToggle}>
				<span className={s.burgerLine}/>
				<span className={s.burgerLine}/>
				<span className={s.burgerLine}/>
			</button>
			<div className={classNames(s.backdrop, {[s.open]: isMenuOpened})} onClick={buttonMenuToggle}/>

			<NavLink className={s.logoLink} to="/">
				<div><img src={logo} alt="Logo"/></div>
			</NavLink>
			<ul className={classNames(s.menu, {[s.open]: isMenuOpened})}>
				<li className={s.closeButtonItem}>
					<button className={s.closeButton} onClick={buttonMenuToggle}>
						<svg width="30" height="30" className={s.closeImg}>
							<use href={sprite + '#icon-close'}/>
						</svg>
					</button>
				</li>
				<li className={s.menuItem}>
					<NavLink className={s.menuLink} to={routes.transactions} onClick={buttonMenuToggle}>
						<span>Транзакции</span>
					</NavLink>
				</li>
				<li className={s.menuItem}>
					<NavLink className={s.menuLink} to={routes.categories} onClick={buttonMenuToggle}>
						<span>Категории</span>
					</NavLink>
				</li>
				<li className={s.menuItem}>
					<NavLink className={s.menuLink} to={routes.report} onClick={buttonMenuToggle}>
						<span>Отчет</span>
					</NavLink>
				</li>
			</ul>


			{/*<NavLink to="/" exact className={s.link}>*/}
			{/*	<div>*/}
			{/*		<img src={logo}*/}
			{/*		     sizes="(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw"*/}
			{/*		     alt="Logo"/>*/}
			{/*	</div>*/}
			{/*</NavLink>*/}

			{/*{isLoggedIn && (<NavLink*/}
			{/*	to={routes.categories}*/}
			{/*	exact>*/}
			{/*	<span className={s.category}>Категории</span>*/}


			{/*	<div className={s.categoryIcon}>*/}
			{/*		<Menu className={s.menu}>*/}

			{/*			<a id="categories" className={s.menuItem} href={routes.categories}>Категории</a>*/}
			{/*			<a id="transactions" className={s.menuItem} href={routes.transactions}>Транзакции</a>*/}
			{/*			<a id="reports" className={s.menuItem} href={routes.report}>Отчеты</a>*/}
			{/*		</Menu>*/}

			{/*	</div>*/}


			{/*</NavLink>)}*/}
			{/*{isLoggedIn && (<NavLink*/}
			{/*	to={routes.transactions}*/}
			{/*	exact>*/}
			{/*	<span className={s.category}>Транзакции</span>*/}

			{/*</NavLink>)}*/}
			{/*{isLoggedIn && (<NavLink*/}
			{/*	to={routes.report}*/}
			{/*	exact>*/}
			{/*	<span className={s.category}>Отчеты</span>*/}

			{/*</NavLink>)}*/}

		</nav>
	);
}
