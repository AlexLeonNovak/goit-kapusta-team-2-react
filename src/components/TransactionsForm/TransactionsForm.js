import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import Dropdown from "./Dropdown";
import DatePicker from "../DatePick/DatePicker";

import { transactionsOperations } from "../../redux/transactions";

import data from "./categories.json";
import s from '../TransactionsForm/TransForm.module.scss'

const TransactionsForm = ({type}) => {
  const valueInputId = shortid.generate();
  const textValueInputId = shortid.generate();

  const dispatch = useDispatch();
  const [datetime, setDatetime] = useState(new Date());
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(0);

  const categoryFilter = () => {
       return data.filter(data => data.type === type)
  }

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
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
      
        <div className={s.inputWrap}>
 <div className={s.transFormItemWrapper}>
 
        <DatePicker value={datetime} onChange={setDatetime}/>

        <input
          id={valueInputId}
          name="description"
          type="text"
          placeholder="Описание"
          value={description}
          onChange={handleChange}
          className={s.descr}
        />

          <Dropdown
            id={textValueInputId}
            label="name"
            options={data}
            prompt="Категория товара"

            value={category}
            onChange={(value) => setCategory(value)}
          />
    
        <input
          value={amount}
          name="amount"
          type="number"
          max="100000"
          min="1"
          placeholder="00.00"
          pattern="\d+(.\d{2})?"
          onChange={handleChange}
          className={s.calc}
        />
      </div>
      <div>
        <button className={s.button} type="submit">
          ВВОД
        </button>

        <button className={s.button} type="reset">ОЧИСТИТЬ</button>
      </div>

    </div>
     </form>
    </div>

       

    
  );
};

export default TransactionsForm;
