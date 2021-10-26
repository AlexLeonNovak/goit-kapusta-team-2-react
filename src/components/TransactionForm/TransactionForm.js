import { useState, useCallback} from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePick/DatePicker";

import { transactionsOperations } from "../../redux/transactions";
import { categoriesSelectors } from "../../redux/categories";

import sprite from "../../base/images/sprite.svg";

import { categoryTypes } from "../../helpers/constants";
import '../../base/sass/main.scss';
import { useToasts } from 'react-toast-notifications';


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
        notify()
      reset();
    },
    [dispatch, datetime, description, category, amount]
  );
  const { addToast } = useToasts()
  const notify = () => {
      if (!description || !amount || !category) {
        return addToast(
          "Description, amount and category are required fields",
          {
            appearance: 'error',
            autoDismiss: false
          });
      }
      else {
        return addToast("Successful operation", {
          appearance: 'success',
          autoDismiss: true
         })
    }
  }
  
  return (
    <div className='formWrapper'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='inputWrap'>
          <div className='flexInput'>
            <DatePicker value={datetime} onChange={setDatetime} />
            <div>
              <input
                // id={valueInputId}
                name="description"
                type="text"
                placeholder="Описание"
                value={description}
                onChange={handleChange}
                className='input'
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
            <div className='amountInputWrapper' >
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
                  className='input'
                />
              </div>
              <span className='iconCalcWrapper'>
                <svg width="20" height="20">
                  <use href={sprite + "#icon-calculator"} />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <button className='btn btn-accent' type="submit">
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
