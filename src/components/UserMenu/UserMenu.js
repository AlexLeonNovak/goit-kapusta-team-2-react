import React, { useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../base/images/desktop/kapustaVip.png';

import Button from '@material-ui/core/Button';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    textAlign:'center',
    padding: 5,
    margin:10,
    fontWeight: 700,
    color: '#fff',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
//   const email = useSelector(authSelectors.getUseremail);
  const name = useSelector(authSelectors.getUsername);
 
   const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut());
   }, [dispatch]);
  
  return (
    <div style={styles.container}>
    <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    {/* <span style={styles.email}>Welcome, {email}</span> */}
    
    <Button style={styles.link} variant="contained" color="secondary" href="#contained-buttons" type="button" onClick={onLogOut}>
      Log out
    </Button>
  </div>
);
}