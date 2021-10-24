import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePick/DatePicker";

import { transactionsOperations } from "../../redux/transactions";
import { categoriesSelectors } from "../../redux/categories";

import sprite from "../../base/images/sprite.svg";

import { categoryTypes } from "../../helpers/constants";
import { toast } from "react-toastify";
import '../../base/sass/main.scss';

export const TransactionForm = ({ type }) => {
  const dispatch = useDispatch();

  const [datetime, setDatetime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(0);

  const categories = useSelector(categoriesSelectors.getAllCategories);

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

      case "amount":
        setAmount(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const reset = () => {
    setDescription("");
    setCategory(null);
    setAmount("00.00");
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
  const notify = () => {
    if (!description || !amount || !category) {
      return toast.warning(
        "Description, amount and category are required fields"
      );
    }
    toast.success("Successful operation");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <DatePicker value={datetime} onChange={setDatetime} />
            <div>
              <input
                // id={valueInputId}
                name="description"
                type="text"
                placeholder="Описание"
                value={description}
                onChange={handleChange}
              />
            </div>

            <Dropdown
              // id={textValueInputId}
              label="name"
              options={categoryFilter()}
              prompt="Категория товара"
              value={category}
              onChange={(value) => setCategory(value)}
            />
            <div>
              <div>
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
              <span>
                <svg width="20" height="20">
                  <use href={sprite + "#icon-calculator"} />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <button className='btn btn-accent' type="submit" onClick={notify}>
              ВВОД
            </button>

            <button className='btn' type="reset" onClick={reset}>
              ОЧИСТИТЬ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

TransactionForm.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME]),
};
