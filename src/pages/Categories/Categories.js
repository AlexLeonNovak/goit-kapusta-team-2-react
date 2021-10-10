import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesOperations, categoriesSelectors } from '../../redux/categories';
import shortid from 'shortid';
import s from '../Categories/Categories.module.scss'

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getVisibleCategories);
  
  useEffect(() => {
    dispatch(categoriesOperations.fetchCategories());
  }, [dispatch]);

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
        setType(type);
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

  return (
    <div className={s.wrapper}>
      <h2 className={s.categoriesTitle}>Categories</h2>

      <div className={s.categoriesWrapper}>
        <form action="" className={s.categoriesForm}>
          <input
            className={s.categoriesFormItem}
            onChange={handleChange}
            value={name}
            id={nameInputId}
            name="name"
            type="text"
            label="Category name"
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
            required
          />
          <button
            className={s.categoriesFormItem}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {/* <table className={s.categoriesTable}>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table> */}
      </div>
    </div>
  );
};

export default Categories;