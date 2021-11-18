import axios from 'axios';
import { categoriesActions } from './index';
import { toastActions } from '../toast'

export const fetchCategories = () => async dispatch => {
  dispatch(categoriesActions.fetchCategoryRequest());

  try {
    const { data } = await axios.get('/categories');
    dispatch(categoriesActions.fetchCategorySuccess(data.data.categories));
  } catch (error) {
    dispatch(categoriesActions.fetchCategoryError(error.message));
    dispatch(toastActions.errorMessage('Categories fetch error'));
  }
};


export const addCategory = ({name, type, logo}) => async (dispatch) => {
  console.log(type)
    dispatch(categoriesActions.addCategoryRequest());

    const bodyFormData = new FormData();
    bodyFormData.append('logo', logo);
    bodyFormData.append('name', name);
    bodyFormData.append('type', type);

    try {
      const { data } = await axios.post("/categories", bodyFormData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`
        }
      });
      dispatch(categoriesActions.addCategorySuccess(data.data.result));
      dispatch(toastActions.successMessage('Категория успешно добавлена'));
    } catch (error) {
      dispatch(categoriesActions.addCategoryError(error.message));
      dispatch(toastActions.errorMessage(`Add category error: ${error.message}`));
    }
  };

export const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch(categoriesActions.deleteCategoryRequest());

  try {
    await axios.delete(`/categories/${categoryId}`);
    dispatch(categoriesActions.deleteCategorySuccess(categoryId));
    dispatch(toastActions.successMessage('Категория успешно удалена'));
  } catch (error) {
    dispatch(categoriesActions.deleteCategoryError(error.message));
    dispatch(toastActions.errorMessage(`Delete category error: ${error.message}`));
  }
};

