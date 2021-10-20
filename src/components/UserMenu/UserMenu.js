import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import { userSelectors } from "../../redux/user";
import defaultAvatar from "../../base/images/desktop/kapustaVip.png";
// import s from '../UserMenu/UserMenu.module.scss';
import Modal from "../Modal";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(userSelectors.getEmail);
  const emailFirstLetter = useSelector(userSelectors.getFirstLetterOfEmail);

  const [showModal, setShowModal] = useState(false);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onOpenModal = () => {
    setShowModal(true);
  };

  //const shortName = email.toString().charAt(0);
  //console.log(email[0]);
  return (
    <div>
      <span>{emailFirstLetter}</span>
      <span>{email}</span>
      <span />

      <button onClick={onOpenModal} type="button">
        <u>Выйти</u>
      </button>

      {showModal && (
        <Modal
          ChildComponent
          title={"Вы действительно хотите выйти?"}
          onClose={toggleModal}
          onClick={onLogOut}
        />
      )}
    </div>
  );
}
