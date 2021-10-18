import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import {
  categoriesOperations,
  categoriesSelectors,
} from "../../redux/categories";
import s from "../CategoriesList/CategoriesList.module.scss";
import trash from "../../base/images/svg_black/trash.svg";
import Modal from "../Modal";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllCategories);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
    setId("");
  };

  const onOpenModal = (id) => {
    setShowModal(true);
    setId(id);
  };

  const API_URL = `${process.env.REACT_APP_API_URL}/`;

  const onDeleteContact = useCallback(
    (id) => {
      dispatch(categoriesOperations.deleteCategory(id));
    },
    [dispatch]
  );

  return (
    <div>
      <table className={s.categoriesTable}>
        <thead className={s.categoriesHead}>
          <tr className={s.categoriesHeadList}>
            <th className={s.categoriesHeadItem}>Лого</th>
            <th
              className={classNames(
                s.categoriesHeadItem,
                s.categoriesHeadItemName
              )}
            >
              Название
            </th>
            <th
              className={classNames(s.categoriesHeadItem, s.categoriesHeadType)}
            >
              Тип
            </th>
            <th />
          </tr>
        </thead>
        <tbody className={s.categoriesBody}>
          {categories.map(({ _id, name, type, logo }) => (
            <tr key={_id} className={s.categoriesList}>
              <td className={s.categoriesLogo}>
                <img
                  src={API_URL + logo}
                  alt='logo'
                  className={s.categoriesImg}
                />
              </td>
              <td className={s.categoriesInfo}>
                <span className={s.categoriesName}>{name}</span>
                <span className={s.categoriesType}>{type}</span>
              </td>
              <td className={s.categoriesTypeColumn}>
                {type === "expense" ? "расходы" : "доход"}
              </td>
              <td align='center' className={s.categoriesActions}>
                <button
                  onClick={() => onOpenModal(_id)}
                  className={s.categoriesActionsDelete}
                >
                  <img
                    src={trash}
                    alt='Delete'
                    className={s.categoriesActionsDeleteIcon}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal
          ChildComponent
          title={"Вы уверены?"}
          onClose={toggleModal}
          onClick={() => onDeleteContact(id)}
        />
      )}
    </div>
  );
};

export default CategoriesList;
