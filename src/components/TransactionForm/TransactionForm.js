import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import Dropdown from "../Dropdown/Dropdown";

import { transactionsOperations } from "../../redux/transactions";
import { categoriesSelectors } from "../../redux/categories";
import { walletsOperations, walletsSelectors } from "../../redux/wallets";
import { categoryTypes } from "../../helpers/constants";
import { toast } from "react-toastify";

import sprite from "../../base/images/sprite.svg";
import calendarIcon from "../../images/calendar.png";

import "react-datepicker/dist/react-datepicker.css";
import s from "./TransactionForm.module.scss";

export const TransactionForm = ({ type }) => {
  const dispatch = useDispatch();

  const [datetime, setDatetime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [wallet, setWallet] = useState(null);

  const [amount, setAmount] = useState(0);

  const categories = useSelector(categoriesSelectors.getAllCategories);
  const wallets = useSelector(walletsSelectors.getAllWallets);

  const categoryFilter = () => {
    return categories.filter((category) => category.type === type);
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "description":
        setDescription(value);
        break;

      case "category":
        setCategory(value);
        break;

      case "wallet":
        setWallet(value);
        break;

      case "amount":
        setAmount(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const reset = () => {
	updateBalans(wallet._id, newBalance(wallet, amount));
    setDescription("");
    setCategory(null);
    setAmount("00.00");
    setWallet(null);
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
          wallet: wallet._id,
        })
      );
      reset();
    },
    [dispatch, datetime, description, category, amount, wallet]
  );

  const newBalance = (wallet, amount) => {
    let balance = 0;

    if (type === "expense") {
      balance = Number(wallet.balance) - Number(amount);
    } else {
      balance = Number(wallet.balance) + Number(amount);
    }
    return balance;
  };

  const updateBalans = useCallback(
    (id, balance) => {
      dispatch(
        walletsOperations.updateWallet(id, {
          balance,
        })
      );
    },
    [dispatch]
  );

  const notify = () => {
    if (!description || !amount || !category || !wallet) {
      return toast.warning(
        "Description, amount and category are required fields"
      );
    }
    toast.success("Successful operation");
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${s.form}`}>
      <div className={s.calendarWrapper}>
        <DatePicker
          selected={datetime}
          onChange={setDatetime}
          dateFormat='dd.MM.yyyy'
          customInput={
            <input type='text' className={`input ${s.calendarInput}`} />
          }
        />
        <span className={s.calendarImg}>
          <img src={calendarIcon} alt={calendarIcon} />
        </span>
      </div>
      <div className='formGroup'>
        <div className='inputWrapper'>
          <input
            name='description'
            type='text'
            placeholder='Описание'
            value={description}
            onChange={handleChange}
            className='input'
          />
        </div>
        <div className='inputWrapper'>
          {/*TODO add wallets */}
          <Dropdown
            label='name'
            options={wallets}
            prompt='Счета'
            value={wallet}
            onChange={(value) => setWallet(value)}
            className='input'
          />
        </div>
        <div className='inputWrapper'>
          <Dropdown
            label='name'
            options={categoryFilter()}
            prompt='Категория товара'
            value={category}
            onChange={(value) => setCategory(value)}
            className='input'
          />
        </div>
        <div className={`inputWrapper ${s.amountInputWrapper}`}>
          <input
            value={amount}
            name='amount'
            type='number'
            max='100000'
            min='1'
            placeholder='00.00'
            pattern='\d+(.\d{2})?'
            onChange={handleChange}
            className='input'
          />
          <span className={s.iconCalcWrapper}>
            <svg width='20' height='20'>
              <use href={sprite + "#icon-calculator"} />
            </svg>
          </span>
        </div>
      </div>
      <div className={s.btnGroup}>
        <button className='btn btn-accent' type='submit' onClick={notify}>
          ВВОД
        </button>

        <button className='btn' type='reset' onClick={reset}>
          ОЧИСТИТЬ
        </button>
      </div>
    </form>
  );
};

TransactionForm.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME]),
};
