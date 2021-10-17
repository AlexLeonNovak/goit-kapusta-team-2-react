import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { authOperations } from '../../redux/auth';
import { userSelectors } from '../../redux/user';
import defaultAvatar from '../../base/images/desktop/kapustaVip.png';
import s from '../UserMenu/UserMenu.module.scss';
import Modal from '../Modal';

export default function UserMenu() {
	const dispatch = useDispatch();
	const email = useSelector(userSelectors.getEmail);

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
		<div className={s.userMenu}>
			<img src={defaultAvatar} alt="" width="32" className={s.avatar}/>
			<span className={s.name}> Привет, {email}</span>
			<span className={s.line}/>

			<button
				onClick={onOpenModal}
				type="button"
				className={`${s.button} ${s.buttonPhone}`}>
				<u>Выйти</u>
			</button>

			{showModal && (
				<Modal ChildComponent title={'Вы действительно хотите выйти?'} onClose={toggleModal} onClick={onLogOut}/>
			)}
		</div>
	);
};
