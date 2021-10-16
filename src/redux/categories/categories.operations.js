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

export const addCategory =
  ({ name, type }) =>
  async (dispatch) => {
    const category = { name, type };

    dispatch(categoriesActions.addCategoryRequest());

    try {
      const { data } = await axios.post("/categories", category);
      dispatch(categoriesActions.addCategorySuccess(data));
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

