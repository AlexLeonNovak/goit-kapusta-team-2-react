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
        <div className={s.categoriesTitleWrapper}>
          <h2 className={s.categoriesTitle}>Категории</h2>
        </div>        
        <div className={s.categoriesWrapper}>          
          <CategoriesForm />
          <CategoriesList />
        </div>
      </div>
    </div>
  );
};

export default Categories;