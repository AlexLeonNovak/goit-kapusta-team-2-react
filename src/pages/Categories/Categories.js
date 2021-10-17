import CategoriesForm from '../../components/CategoriesForm';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import s from '../Categories/Categories.module.scss'

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
        </div>
      </div>
    </div>
  );
};

export default Categories;
