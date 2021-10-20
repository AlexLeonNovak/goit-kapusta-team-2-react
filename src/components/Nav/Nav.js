import { useState } from "react";
import { NavLink } from "react-router-dom";

// import s from '../Nav/Nav.module.scss';
import logo from "../../base/images/desktop/logo.png";
import sprite from "../../base/images/sprite.svg";
import routes from "../../routes";
// import classNames from 'classnames';

export default function Navigation() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <nav>
      <button onClick={openMenu}>
        <span />
        <span />
        <span />
      </button>
      <div />

      <NavLink to="/">
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </NavLink>
      <ul>
        <li>
          <button onClick={closeMenu}>
            <svg width="30" height="30">
              <use href={sprite + "#icon-close"} />
            </svg>
          </button>
        </li>
        <li>
          <NavLink to={routes.transactions} onClick={closeMenu}>
            <span>Транзакции</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.categories} onClick={closeMenu}>
            <span>Категории</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.report} onClick={closeMenu}>
            <span>Отчет</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
