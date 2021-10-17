import CategoriesForm from '../../components/CategoriesForm/CategoriesForm';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import s from '../Categories/Categories.module.scss'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {
  return (
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
  );
};

export default Categories;
