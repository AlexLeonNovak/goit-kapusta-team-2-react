import { CategoriesForm } from "../../components/CategoriesForm";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import Balance from "../../components/Balance";
import s from "../Categories/Categories.module.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Categories = () => {
  return (
    <>
      <div className={s.balance}>
        <Balance isHiddenBtn={false} />
      </div>
      <div className={s.categories}>
        <div className={s.container}>
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
    </>
  );
};

export default Categories;
