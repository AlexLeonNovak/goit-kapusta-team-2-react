import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  categoriesOperations,
  categoriesSelectors,
} from "../../redux/categories";
// import s from '../CategoriesForm/CategoriesForm.module.scss'
import Dropdown from "../Dropdown/Dropdown";
import { categoryTypes } from "../../helpers/constants";
import { toast } from "react-toastify";

export const CategoriesForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [filename, setFilename] = useState("Загрузите логотип");
  const [logo, setLogo] = useState(null);

  const onChange = (e) => setType(e.currentTarget.value);

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

      categories.find((category) => category.name === name)
        ? alert(`${name} уже существует!`)
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
  const notify = () => {
    if (!name || !type) {
      return toast.warning("Name and type are required fields");
    }
    toast.success("Successful operation");
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              onChange={handleChange}
              value={name}
              name="name"
              type="text"
              label="Category name"
              placeholder="Описание категории"
              required
            />

            <Dropdown
              label="name"
              options={types}
              prompt="Тип категории"
              value={type}
              onChange={(value) => setType(value)}
            />
          </div>

          <input
            type="file"
            name="filename"
            id="filename"
            onChange={handleChange}
          />
          <label htmlFor="filename">{filename}</label>
        </div>
        <div>
          <button type="submit" onClick={notify}>
            Ввод
          </button>

          <button type="reset" onClick={reset}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};
