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
