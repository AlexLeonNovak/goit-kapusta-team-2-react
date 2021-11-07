import React from 'react';

const AuthContainer = ({ children }) => (
  <main className='authBackgroud'>
    <div className='containerauth'>{children}</div>
  </main>
);

export default AuthContainer;