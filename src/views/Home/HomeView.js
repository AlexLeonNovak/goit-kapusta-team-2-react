import React from 'react';
import s from "../Home/home.module.scss";



const HomeView = () => (
  <div className={s.wrapper}>
    <header className={s.header}>
   <a href='./'>
        <picture className={s.logo}>
          <source srcset='../../base/images/mobile/logo.png 1x, ../../base/images/mobile/logo.png 2x' media='(max-width: 767px)' />
          <source srcset='../../base/images/tablet/logo.png 1x, ../../base/images/tablet/logo.png 2x' media='(min-width: 768px)' />
          <source srcset='../../base/images/desktop/logo.png 1x, ../../base/images/desktop/logo.png 2x' media='(min-width: 1200px)' />
          <img src='../../base/images/desktop/logo.png'
               sizes='(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw'
               alt='Logo'/>
        </picture>
       
      </a>
    </header>
    <section>
     
      <div className={s.overlay}>
        <div className={s.hero}>

          <h1 className={s.title}>Kapu$ta</h1>
        <div >
            <h2>
             form
         </h2>
      </div>
      </div>
      </div>
      <div className={s.pic}>

      </div>
      
    </section>
  </div>
);

export default HomeView;
