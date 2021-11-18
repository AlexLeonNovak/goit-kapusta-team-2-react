import { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

import styles from '../AuthForm/AuthForm.module.scss';
import logo from "../../images/logo.png";
import { authOperations } from "../../redux/auth";
import '../../base/sass/main.scss';

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const hahdleChangeEmail = (e) => setEmail(e.target.value);
  const hahdleChangePassword = (e) => setPassword(e.target.value);

  const handleClickRegisterButton = () => {
	  dispatch(authOperations.register({ email, password }));
    reset();
  };

  const handleClickLoginButton = () => {
	  dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const responseGoogleSuccess = (response) => {
	  dispatch(authOperations.googleAuth(response.tokenId));
  };

  const responseGoogleFail = (response) => {
    console.log(response);
  };

  return (
    <div className={styles.wrapper}>
			<form className={styles.form} autoComplete="off">
				<p className={styles.form_titleGoogle}>
					Вы можете авторизироваться с помощью Google Account:
				</p>
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					onSuccess={responseGoogleSuccess}
					onFailure={responseGoogleFail}
					cookiePolicy={'single_host_origin'}
					render={props => (
						<button className={styles.form_googleLink} {...props}>
							<img className={styles.form_googleLogo} src={logo} alt="logo_google"/>
							Google
						</button>
					)}
				/>
				<p className={styles.form_title}>
					Или зайти в приложение с помощью e-mail и пароля, предварительно
					зарегестрировавшись:
				</p>
				<div className={styles.form_inputArea}>
					<label htmlFor="email" className={styles.form_inputDescription}>
						Электронная почта:
					</label>
					<input
						id="email"
						name="email"
						type="email"
						value={email}
						onChange={hahdleChangeEmail}
						required
						className={styles.form_input}
						placeholder="your@email.com"
					/>
					<label htmlFor="password" className={styles.form_inputDescription}>
						Пароль:
					</label>
					<input
						id="password"
						name="password"
						type="password"
						value={password}
						onChange={hahdleChangePassword}
						required
						className={styles.form_input}
						placeholder="Пароль"
					/>
					<div className={styles.form_buttons}>
						<button
							onClick={handleClickLoginButton}
							type="button"
							className={styles.form_button}
						>
							Войти
						</button>
						<button
							onClick={handleClickRegisterButton}
							type="button"
							className={styles.form_button}
						>
							Регистрация
						</button>
					</div>
				</div>
			</form>
		</div>
  );
};

export default AuthForm;
