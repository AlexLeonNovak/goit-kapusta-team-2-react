import axios from 'axios';
import { categoriesActions } from './index';

export const fetchCategories = () => async dispatch => {
  dispatch(categoriesActions.fetchCategoryRequest());

  try {
    const { data } = await axios.get('/categories');
    dispatch(categoriesActions.fetchCategorySuccess(data.data.categories));
  } catch (error) {
    dispatch(categoriesActions.fetchCategoryError(error.message));
  }
};

const addCategory =
  (category) =>
  async (dispatch) => {
    dispatch(addCategoryRequest());
    console.log(category);

    const bodyFormData = new FormData();
    bodyFormData.append('logo', category.logo);

    try {
      const { data } = await axios.post("/categories", bodyFormData, { headers: { 'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}` } });
      dispatch(addCategorySuccess(data.data));

    } catch (error) {
      dispatch(categoriesActions.addCategoryError(error.message));
    }
  };

export const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch(categoriesActions.deleteCategoryRequest());

  try {
    await axios.delete(`/categories/${categoryId}`);
    dispatch(categoriesActions.deleteCategorySuccess(categoryId));
  } catch (error) {
    dispatch(categoriesActions.deleteCategoryError(error.message));
  }
};

