import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesForm from '../../components/CategoriesForm/CategoriesForm';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { categoriesOperations } from '../../redux/categories';
import s from '../Categories/Categories.module.scss'

const Categories = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(categoriesOperations.fetchCategories());
  }, [dispatch]);

  return (
    <div className={s.categories}>
      <div className={s.container}>
        {/* <h2 className={s.categoriesTitle}>Categories</h2> */}
        <CategoriesForm />  
        <CategoriesList />
      </div>
    </div>
  );
};

export default Categories;