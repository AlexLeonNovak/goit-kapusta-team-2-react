import React from 'react';

const AuthContainer = ({ children }) => (
  <main className='authBackground'>
    <div className='container'>{children}</div>
  </main>
);

export default AuthContainer;
