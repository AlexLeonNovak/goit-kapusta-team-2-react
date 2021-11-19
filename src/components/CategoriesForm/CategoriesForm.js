import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  categoriesOperations,
  categoriesSelectors,
} from "../../redux/categories";
import s from '../CategoriesForm/CategoriesForm.module.scss'
import Dropdown from "../Dropdown/Dropdown";
import { categoryTypes } from "../../helpers/constants";
import '../../base/sass/main.scss';
import {toastActions} from '../../redux/toast';

export const CategoriesForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [filename, setFilename] = useState("Загрузите логотип");
  const [logo, setLogo] = useState(null);

  const types = [
    {
      name: "Доход",
      value: categoryTypes.INCOME,
    },
    {
      name: "Расход",
      value: categoryTypes.EXPENSE,
    },
  ];

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "filename":
        setLogo(files[0]);
        setFilename(files[0].name);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!name || !type) {
        dispatch(toastActions.errorMessage('Все поля обязательны для заполнения'));
        return;
      }
      categories.find((category) => category.name === name)
        ? dispatch(toastActions.errorMessage(`${name} уже существует!`))
        : dispatch(
          categoriesOperations.addCategory({
            name,
            type: type.value,
            logo,
          })
        );
      reset();
    },
    [categories, dispatch, name, type, logo]
  );

  const reset = () => {
    setName("");
    setType("");
    setFilename("Загрузите логотип");
    setLogo(null);
  };


  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className={s.form}
    >
        <div className={`formGroup ${s.formGoup}`}>
          <div className="inputWrapper">
            <input
              onChange={handleChange}
              value={name}
              name="name"
              type="text"
              label="Category name"
              placeholder="Описание категории"
              required
              className={`input`}
            />
          </div>
          <div className={`inputWrapper ${s.categoryTypeInputWrapper}`}>
            <Dropdown
              label="name"
              options={types}
              prompt="Тип категории"
              value={type}
              onChange={(value) => setType(value)}
              className="input"
            />
          </div>
          <div>
            <input
              type="file"
              name="filename"
              id="filename"
              onChange={handleChange}
              className={s.customFileUploader}
            />
            <label htmlFor="filename">{filename}</label>
          </div>
        </div>

        <div className={s.btnWrapper}>
          <button className={`btn btn-accent ${s.btn}`} type="submit">
            Ввод
          </button>

          <button className={`btn ${s.btn}`} type="reset" onClick={reset}>
            Очистить
          </button>
        </div>
    </form>
  );
};
