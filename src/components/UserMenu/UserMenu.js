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
//   const email = useSelector(authSelectors.getUseremail);
  const name = useSelector(authSelectors.getUsername);

   const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut());
   }, [dispatch]);

  return (
    <div className={s.container}>
    <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
    <span className={s.name}>Welcome, user name {name}</span>
    {/* <span style={styles.email}>Welcome, {email}</span> */}

    {/* <Button className={s.link} variant="contained" color="secondary" href="#contained-buttons" type="button" onClick={onLogOut}>
     Выйти
      </Button> */}
      <button
              onClick={onLogOut}
              type="button"
              className={s.button}>
              Выйти
            </button>



  </div>
);
}
