import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    walletsOperations,
    walletsSelectors,
} from "../../redux/wallets";
import trash from "../../base/images/svg_black/trash.svg";
import Modal from "../Modal";


export const BillsList = () => {
  const dispatch = useDispatch();
  const wallets = useSelector(walletsSelectors.getAllWallets);

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
  const onDeleteWallet = useCallback(
    (id) => {
      dispatch(walletsOperations.deleteWallet(id));
    },
    [dispatch]
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Сума</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {wallets.map((item) => (
            <tr key={item._id}>
                  <td>
                <span>{item.name}</span>
              </td>
              <td>{item.balance}</td>
              <td align="center">
                <button onClick={() => onOpenModal(item._id)}>
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
          onClick={() => onDeleteWallet(id)}
        />
      )}
    </div>
  );
};

