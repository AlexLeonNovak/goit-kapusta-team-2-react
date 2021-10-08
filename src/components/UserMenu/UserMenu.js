import React, { useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from '../../redux/auth/auth.operations';
import authSelectors from '../../redux/auth/auth.selectors';
import defaultAvatar from '../../base/images/desktop/kapustaVip.png';
import s from "../UserMenu/UserMenu.module.scss";

import Button from '@material-ui/core/Button';


export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

   const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut());
   }, [dispatch]);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      
      <span className={s.name}> User name {email}</span>
      {/* <span style={styles.email}>Welcome, {email}</span> */}
<span className={s.line}></span>
     
      <button
        onClick={onLogOut}
        type="button"
        className={`${s.button} ${s.buttonPhone}`}>
        <u>Выйти</u>
      </button>
    </div>
  );
};
