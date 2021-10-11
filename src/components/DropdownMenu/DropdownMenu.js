import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import Dropdown from "./Dropdown";
import DatePicker from "../DatePick/DatePicker";

import { transactionsOperations } from "../../redux/transactions";

import data from "./categories.json";

const DropdownMenu = () => {
  const valueInputId = shortid.generate();
  const textValueInputId = shortid.generate();

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [textValue, setTextValue] = useState(null);
  const [cat, setCat] = useState(null);
  const [sum, setSum] = useState(null);

  // const handleChange = (e) => setTextValue(e.target.value);

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "textValue":
        setTextValue(value);
        break;

      case "cat":
        setCat(value);
        break;

      case "sum":
        setSum(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        transactionsOperations.addTransaction({
          id: shortid.generate(),
          value,
          textValue,
          cat,
          sum,
        })
      );
      reset();
    },
    [dispatch, value, textValue, cat, sum]
  );

  const reset = () => {
    setTextValue("");
    setSum("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <DatePicker />

        <input
          id={valueInputId}
          type="text"
          options={data}
          placeholder="Описание товара"
          value={textValue}
          onChange={handleChange}
        />

        <div style={{ width: 200 }}>
          <Dropdown
            id={textValueInputId}
            label="name"
            options={data}
            prompt="Категория товара"
            value={value}
            // onChange={handleChange}
            onChange={(value) => setValue(value)}
          />
        </div>

        <input
          value={textValue}
          type="number"
          max="100000"
          min="1"
          placeholder="00.00"
          pattern="\d+(.\d{2})?"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="contacts__form-button" type="submit">
          ВВОД
        </button>

        <button type="button">ОЧИСТИТЬ</button>
      </div>
    </form>
  );
};

export default DropdownMenu;
