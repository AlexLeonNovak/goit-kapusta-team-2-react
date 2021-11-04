import { useSelector } from 'react-redux';
import SVG from 'react-inlinesvg';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { categoriesSelectors } from '../../redux/categories';
import { transactionsSelectors } from '../../redux/transactions';
import s from './Accounting.module.scss';
import { categoryTypes } from '../../helpers/constants';

export const Accounting = ({ type, onChangeCategory }) => {
  const transactions = useSelector(transactionsSelectors.getAllTransactions);
  const categories = useSelector(categoriesSelectors.getAllCategories).filter(
    (category) => category.type === type
  );

  const amounts = transactions.reduce((acc, transaction) => {
    return {
      ...acc,
      [transaction.category._id]:
        (acc[transaction.category._id] || 0) + transaction.amount,
    };
  }, {});

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    onChangeCategory(categories[currentIndex]?._id);
  }, [currentIndex, categories, onChangeCategory]);

  return (
    <div className={s.categoriesListContainer}>
      <ul className={s.categoriesList}>
        {categories.map((category, index) => {
          const isSvg = category.logo.split('.').pop().toLowerCase() === 'svg';
          return (
            <li
              key={category._id}
              className={classNames(s.categoryItem, {
                [s.active]: currentIndex === index,
              })}
              onClick={() => setCurrentIndex(index)}
            >
              <span className={s.container_item_txt}>
                {amounts[category._id] || '00.00'}
              </span>
              <div className={s.categoryLogoWrapper}>
                {isSvg ? (
                  <SVG
                    className={s.categoryLogo}
                    width={65}
                    height={57}
                    title={category.name}
                    src={`${process.env.REACT_APP_API_URL}/${category.logo}`}
                  />
                ) : (
                  <img
                    className={s.categoryLogo}
                    src={`${process.env.REACT_APP_API_URL}/${category.logo}`}
                    alt={category.name}
                    width='65'
                    height='57'
                  />
                )}
              </div>
              <span className={s.container_item_txt}>{category.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Accounting.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME]),
  onChangeCategory: PropTypes.func,
};
