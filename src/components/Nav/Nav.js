import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import s from '../Nav/Nav.module.scss';
import logo from '../../base/images/desktop/logo.png'
import sprite from '../../base/images/sprite.svg';
import routes from '../../routes'
import classNames from 'classnames';


export default function Navigation() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const openMenu = () => {
		setIsMenuOpened(true)
	}

	const closeMenu = () => {
		setIsMenuOpened(false)
	}

	return (
		<nav className={s.menuWrapper}>

			<button className={s.menuBtnToggle} onClick={openMenu}>
				<span className={s.burgerLine}/>
				<span className={s.burgerLine}/>
				<span className={s.burgerLine}/>
			</button>
			<div className={classNames(s.backdrop, {[s.open]: isMenuOpened})} onClick={closeMenu}/>

			<NavLink className={s.logoLink} to="/">
				<div><img src={logo} alt="Logo"/></div>
			</NavLink>
			<ul className={classNames(s.menu, {[s.open]: isMenuOpened})}>
				<li className={s.closeButtonItem}>
					<button className={s.closeButton} onClick={closeMenu}>
						<svg width="30" height="30" className={s.closeImg}>
							<use href={sprite + '#icon-close'}/>
						</svg>
					</button>
				</li>
				<li className={s.menuItem}>
					<NavLink className={s.menuLink} to={routes.transactions} onClick={closeMenu}>
						<span>Транзакции</span>
					</NavLink>
				</li>
				<li className={s.menuItem}>
					<NavLink className={s.menuLink} to={routes.categories} onClick={closeMenu}>
						<span>Категории</span>
					</NavLink>
				</li>
				<li className={s.menuItem}>
					<NavLink className={s.menuLink} to={routes.report} onClick={closeMenu}>
						<span>Отчет</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
