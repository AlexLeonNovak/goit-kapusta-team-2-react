import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesOperations, categoriesSelectors } from '../../redux/categories';
import s from '../CategoriesForm/CategoriesForm.module.scss'
import { toast } from 'react-toastify';

export const CategoriesForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);

  // const options = [
  //   { value: 'income', label: 'income' },
  //   { value: 'expense', label: 'expense' }
  // ]

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [filename, setFilename] = useState('Загрузите логотип');
  const [logo, setLogo] = useState(null);

  const onChange = e => setType(e.currentTarget.value);

  const handleChange = useCallback(e => {
    const { name, value, files } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'filename':
        setLogo(files[0]);
        setFilename(files[0].name);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      categories.find(category => category.name === name)
        ? alert(`${name} уже существует!`)
        : dispatch(
          categoriesOperations.addCategory({
            name,
            type,
            logo
          })
        );
      reset();
    },
    [categories, dispatch, name, type, logo]
  );

  const reset = () => {
    setName('');
    setType('');
    setFilename('Загрузите логотип');
    setLogo(null);
  };
  const notify = () => {
    if (!name || !type) {
      return toast.warning('Name and type are required fields')
    }
    toast.success('Successful operation')
  }


  return (
    <div className={s.formWrapper}>
      <form
        encType="multipart/form-data"
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.categoriesInputWrapper}>
          <div className={s.categoriesFormItemWrapper}>

            <input
              className={s.categoriesFormItem}
              onChange={handleChange}
              value={name}
              name="name"
              type="text"
              label="Category name"
              placeholder="Описание категории"
              required
            />

            <select name="select" onChange={onChange}>
              <option value="income">доход</option>
              <option value="expense" selected>расход</option>
            </select>
          </div>

          <input
              type="file"
              name="filename"
              id="filename"
              className={s.customFileUploader}
              onChange={handleChange}
            />
          <label htmlFor="filename">{filename}</label>
        </div>
        <div className={s.buttonWrapper}>
          <button
            className={s.button}
            type="submit"
            onClick={notify}
          >
            Ввод
          </button>

          <button
            className={s.button}
            type="reset"
            onClick={reset}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
};
