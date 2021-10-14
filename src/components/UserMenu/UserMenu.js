import React, { useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from '../../redux/auth/auth.operations';
import authSelectors from '../../redux/auth/auth.selectors';
import defaultAvatar from '../../base/images/desktop/kapustaVip.png';
import s from "../UserMenu/UserMenu.module.scss";
import Modal from "../Modal";



import Button from '@material-ui/core/Button';


export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const name = useSelector(authSelectors.getUserName);

  const [showModal, setShowModal] = useState(false)

   const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut());
   }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal)
  };
 const onOpenModal = () => {
  setShowModal(true)
  };



  return (
    <div className={s.container}>
      {/* <img src={name} alt="" width="32" className={s.avatar} /> */}
       <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}> User name {email}</span>
      {/* <span style={styles.email}>Welcome, {email}</span> */}
<span className={s.line}></span>
     
      <button
        onClick={onOpenModal}
        type="button"
        className={`${s.button} ${s.buttonPhone}`}>
        <u>Выйти</u>
      </button>

      {showModal && (
            <Modal ChildComponent title={'Вы действительно хотите выйти?'} onClose={toggleModal} onClick={onLogOut} />
          )}
    </div>
  );
};