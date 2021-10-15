import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import Dropdown from "./Dropdown";
import DatePicker from "../DatePick/DatePicker";

import { transactionsOperations } from "../../redux/transactions";

import data from "./categories.json";
import s from '../TransactionsForm/TransForm.module.scss'

const TransactionsForm = () => {
  const valueInputId = shortid.generate();
  const textValueInputId = shortid.generate();

  const dispatch = useDispatch();
  const [datetime, setDatetime] = useState(new Date());
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(0);

  // const handleChange = (e) => setTextValue(e.target.value);

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "description":
        setDescription(value);
        break;

      case "category":
        setCategory(value);
        break;

      case "amount":
        setAmount(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const reset = () => {
    setDescription("");
    setAmount("");
    setCategory(null);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        transactionsOperations.addTransaction({
          datetime,
          description,
          category: category._id,
          amount,
        })
      );
      reset();
    },
    [dispatch, datetime, description, category, amount]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <DatePicker value={datetime} onChange={setDatetime} />

        <input
          id={valueInputId}
          name="description"
          type="text"
          placeholder="Описание"
          value={description}
          onChange={handleChange}
        />

        <div style={{ width: 200 }}>
          <Dropdown
            id={textValueInputId}
            label="name"
            options={data}
            prompt="Категория"
            value={category}
            onChange={(value) => setCategory(value)}
          />
        </div>

        <input
          value={amount}
          name="amount"
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

        <button type="reset">ОЧИСТИТЬ</button>
      </div>
    </form>
  );
};

export default TransactionsForm;
