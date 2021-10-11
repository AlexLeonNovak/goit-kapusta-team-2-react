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

    dispatch(fetchCategorySuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(fetchCategoryError(error.message));
  }
};

const addCategory =
  ({ name, type }) =>
  dispatch => {
    const category = { name, type };

    dispatch(addCategoryRequest());

    axios
      .post('/categories', category)
      .then(({ data }) => dispatch(addCategorySuccess(data)))
      .catch(error => dispatch(addCategoryError(error.message)));
  };

const deleteCategory = categoryId => dispatch => {
  dispatch(deleteCategoryRequest());

  axios
    .delete(`/categories/${categoryId}`)
    .then(() => dispatch(deleteCategorySuccess(categoryId)))
    .catch(error => dispatch(deleteCategoryError(error.message)));
};

export default { addCategory, deleteCategory, fetchCategories };
