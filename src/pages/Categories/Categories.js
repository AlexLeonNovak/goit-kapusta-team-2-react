import React from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { CategoriesForm } from "../../components/CategoriesForm";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import {LinkToReport} from "../../components/LinkToReport";
import s from '../Categories/Categories.module.scss'
import LinkToTransactions from '../../components/LinkToTransactions/LinkToTransactions';

const Categories = () => {
  return (
    <div className={s.container}>
      <section className={s.categoriesNavigation}>
        <div className={s.LinkToTransactions}>
          <LinkToTransactions />
        </div>
        <div className={s.LinkToReport}>
          <LinkToReport className={s.test}/>
        </div>        
      </section>
      <div className={s.categoriesTitleWrapper}>
        <h2 className={s.categoriesTitle}>Категории</h2>
      </div>
      <section className={s.categoriesWrapper}>
        <CategoriesForm />
        <CategoriesList />
        <ToastContainer />
      </section>
    </div>
  );
};

export default Categories;
