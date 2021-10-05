import React from 'react';
import s from "./Header.module.scss";
import AppBar from "../../components/AppBar/AppBar";


const Header = () => (
 <div className={s.wrapper}>
        <AppBar />
    </div>

  );

export default Header;
