import axios from 'axios';
import {
  addCategoryRequest,
  addCategorySuccess,
  addCategoryError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryError,
} from './categories.actions';

const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoryRequest());

  try {
    const { data } = await axios.get('/categories');
    dispatch(fetchCategorySuccess(data.data.categories));
  } catch (error) {
    dispatch(fetchCategoryError(error.message));
  }
};

const addCategory =
  ({ name, type }) =>
  async (dispatch) => {
    const category = { name, type };

    dispatch(addCategoryRequest());

    try {
      const { data } = await axios.post("/categories", category);
      dispatch(addCategorySuccess(data));
    } catch (error) {
      dispatch(addCategoryError(error.message));
    }
  };

const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch(deleteCategoryRequest());

  try {
    await axios.delete(`/categories/${categoryId}`);
    dispatch(deleteCategorySuccess(categoryId));
  } catch (error) {
    dispatch(deleteCategoryError(error.message));
  }
};

export default { addCategory, deleteCategory, fetchCategories };
