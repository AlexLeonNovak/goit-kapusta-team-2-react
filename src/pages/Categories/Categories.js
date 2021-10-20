import React from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { CategoriesForm } from "../../components/CategoriesForm";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import LinkToReport from "../../components/LinkToReport/LinkToReport";
import Balance from "../../components/Balance";
// import s from '../Categories/Categories.module.scss'

const Categories = () => {
  return (
    <div>
      <div>
        <LinkToReport />
        <Balance />
      </div>
      <div>
        <h2>Категории</h2>
      </div>
      <div>
        <CategoriesForm />
        <CategoriesList />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Categories;
