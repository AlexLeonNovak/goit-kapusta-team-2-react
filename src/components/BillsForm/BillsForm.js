import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { walletsOperations } from "../../redux/wallets";

import sprite from "../../base/images/sprite.svg";

import "react-datepicker/dist/react-datepicker.css";
import s from "../TransactionForm/TransactionForm.module.scss";
import {toastActions} from '../../redux/toast';

export const BillsForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "balance":
        setBalance(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const reset = () => {
    setName("");
    setBalance("");
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!name || !balance) {
        dispatch(toastActions.errorMessage('Все поля обязательны для заполнения'));
        return;
      }
      dispatch(
        walletsOperations.addWallet({
          name,
          balance,
        })
      );
      reset();
    },
    [dispatch, name, balance]
  );

  return (
    <form onSubmit={handleSubmit} className={`form ${s.form}`}>
      <div className="formGroup">
        <div className="inputWrapper">
          <input
            name="name"
            type="text"
            placeholder="Название счета"
            value={name}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className={`inputWrapper ${s.amountInputWrapper}`}>
          <input
            value={balance}
            name="balance"
            type="number"
            max="1000000"
            min="1"
            placeholder="00.00"
            pattern="\d+(.\d{2})?"
            onChange={handleChange}
            autoComplete="off"
            className="input"
          />
          <span className={s.iconCalcWrapper}>
            <svg width="20" height="20">
              <use href={sprite + "#icon-calculator"} />
            </svg>
          </span>
        </div>
      </div>
      <div className={s.btnGroup}>
        <button className="btn btn-accent" type="submit">
          ВВОД
        </button>

        <button className="btn" type="reset" onClick={reset}>
          ОЧИСТИТЬ
        </button>
      </div>
    </form>
  );
};
