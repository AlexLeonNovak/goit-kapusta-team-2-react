import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Nav/Nav';
import UserMenu from '../UserMenu/UserMenu';

import  authSelectors  from '../../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header style={styles.header}>
      <Navigation />
      <UserMenu /> 
      {/* {isLoggedIn ? <UserMenu /> : "Home"} */}
    </header>
  );
}