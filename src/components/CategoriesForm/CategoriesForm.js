import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesOperations, categoriesSelectors } from '../../redux/categories';
import shortid from 'shortid';
import s from '../CategoriesForm/CategoriesForm.module.scss'

import { toast } from 'react-toastify';

const CategoriesForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);
  
  const nameInputId = shortid.generate();
  const typeInputId = shortid.generate();

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'type':
        setType(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      categories.find(category => category.name === name)
        ? alert(`${name} is already in categories`)
        : categories.find(category => category.type === type)
          ? alert(`${type} is already in categories`)
          : dispatch(categoriesOperations.addCategory({ name, type }));

      reset();
    },
    [categories, dispatch, name, type],
  );

  const reset = () => {
    setName('');
    setType('');
  };
  const notify = () => {
    if (!name || !type) {
      return toast.warning('Name and type are required fields')
    }
    toast.success('Successful operation')
  }


  return (
    <div className={s.formWrapper}>
      <form action="" className={s.form}>
        <div className={s.categoriesInputWrapper}>
          <div className={s.categoriesFormItemWrapper}>
            <input
              className={s.categoriesFormItem}
              onChange={handleChange}
              value={name}
              id={nameInputId}
              name="name"
              type="text"
              label="Category name"
              placeholder="Описание категории"
              required
            />
            <input
              className={s.categoriesFormItem}
              onChange={handleChange}
              value={type}
              id={typeInputId}
              name="type"
              type="text"
              label="Category type"
              placeholder="Тип категории"
              required
            />
          </div>
          <label className={s.customFileUploader}>
            <input type="file" name="file" className={s.input} />
            Выберите логотип
          </label>
        </div>
        <div className={s.buttonWrapper}>
          <button className={s.button}
            type="submit"
            onSubmit={handleSubmit}
            onClick={notify}
          >
            Ввод
          </button>
          <button className={s.button}
            type="submit"
          // onClick={handleSubmit}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
};

export default CategoriesForm;