import React from 'react';

const Container = ({ children }) => (
  <main className='mainBackground'>
    <div className='container'>{children}</div>
  </main>
);

export default Container;
