import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesOperations, categoriesSelectors } from '../../redux/categories';
import shortid from 'shortid';
import s from '../CategoriesForm/CategoriesForm.module.scss'

const CategoriesForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);
  
  const nameInputId = shortid.generate();
  const typeInputId = shortid.generate();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [filename, setFilename] = useState('Загрузите логотип');
  const [logo, setLogo] = useState(null);

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    const { files } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'type':
        setType(value);
        break;
      
      case 'filename':
        setLogo(files[0]);
        setFilename(files[0].name);
        console.log(logo);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, [name, type, filename, logo]);
  
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      categories.find(category => category.name === name)
        ? alert(`${name} is already in categories`)
        : dispatch(categoriesOperations.addCategory({ name, type, logo }));

      reset();
    },
    [categories, dispatch, name, type]
  );

  const reset = () => {
    setName('');
    setType('');
  };

  return (
    <div className={s.formWrapper}>
      <form action="" method="post" encType="multipart/form-data" className={s.form}>
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
          <button className={s.button}
            type="submit"
            onClick={handleSubmit}
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