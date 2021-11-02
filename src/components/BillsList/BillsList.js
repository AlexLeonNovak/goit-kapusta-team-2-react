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
  console.log(wallets);
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
            <tr key={item.wallet._id}>
                  <td>
                <span>{item.wallet.name}</span>
              </td>
              <td>{item.wallet.balance}</td>
              <td align="center">
                <button onClick={() => onOpenModal(item.wallet._id)}>
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

