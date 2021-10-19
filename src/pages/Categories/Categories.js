import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CategoriesForm } from '../../components/CategoriesForm';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import LinkToReport from '../../components/LinkToReport/LinkToReport';
import Balance from '../../components/Balance';
import s from '../Categories/Categories.module.scss'


const Categories = () => {
  return (
    <div className={s.categories}>
      <div className={s.container}>
        <div className={s.balanceWrapper}>
          <LinkToReport />
          <Balance />
        </div>
        <div className={s.categoriesTitleWrapper}>
          <h2 className={s.categoriesTitle}>Категории</h2>
        </div>
        <div className={s.categoriesWrapper}>
          <CategoriesForm />
          <CategoriesList />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Categories;
