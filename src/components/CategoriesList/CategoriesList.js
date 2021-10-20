import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import classNames from 'classnames'

import {
  categoriesOperations,
  categoriesSelectors,
} from "../../redux/categories";
// import s from '../CategoriesList/CategoriesList.module.scss';
import trash from "../../base/images/svg_black/trash.svg";
import Modal from "../Modal";
import { categoryTypes } from "../../helpers/constants";

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
      <table>
        <thead>
          <tr>
            <th>Лого</th>
            <th>Название</th>
            <th>Тип</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {categories.map(({ _id, name, type, logo }) => (
            <tr key={_id}>
              <td>
                <img src={API_URL + logo} alt="logo" />
              </td>
              <td>
                <span>{name}</span>
                <span>
                  {type === categoryTypes.INCOME ? "Доход" : "Расход"}
                </span>
              </td>
              <td>{type === categoryTypes.INCOME ? "Доход" : "Расход"}</td>
              <td align="center">
                <button onClick={() => onOpenModal(_id)}>
                  <img src={trash} alt="Delete" />
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
