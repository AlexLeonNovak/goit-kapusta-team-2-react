import React from 'react';

const Container = ({ children }) => (
  <main className='mainBackgroud'>
    <div className='container'>{children}</div>
  </main>
);

export default Container;