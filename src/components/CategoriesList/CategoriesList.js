import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesOperations, categoriesSelectors } from '../../redux/categories';
import s from '../CategoriesList/CategoriesList.module.scss';
import trash from '../../base/images/svg_black/trash.svg';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);

  const API_URL = `${process.env.REACT_APP_API_URL}/`;

  const onDeleteContact = useCallback(
    id => {
      dispatch(categoriesOperations.deleteCategory(id));
    },
    [dispatch],
  );

  return (
    <div>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <td>Название</td>
            <td>Тип</td>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ _id, name, type, logo }) => (
            <tr key={_id} className={s.tableList}>
              <td className={s.tableCol}>
                <tr>{name}</tr>
                <tr>{type}</tr>
              </td>
              <td className={s.tableCol}>
                <img src={API_URL + logo} alt="logo" className={s.tableLogo} />
              </td>
              <td align="center">
                <button onClick={() => onDeleteContact(_id)} className={s.mobileDelete}>
                  <img src={trash} alt="" className={s.mobileDeleteIcon} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul className={s.list}>
        {categories.map(({ _id, name, type, logo }) => (
          <li key={_id} className={s.listItem}>
            <div className={s.infoWrapper}>
              <p>{name}</p>
              <p>{type}</p>
            </div>
            <img src={API_URL + logo} alt="logo" className={s.listLogo}/>
            <button onClick={() => onDeleteContact(_id)} className={s.listButton}>
              <img src={trash} alt="" className={s.listButtonIcon} />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CategoriesList;