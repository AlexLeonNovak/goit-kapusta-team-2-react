import {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from '../AuthForm/AuthForm.module.scss';
import logo from '../../images/logo.png';
import authOperations from '../../redux/auth/auth.operations';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const hahdleChangeEmail = e => setEmail(e.target.value);
    const hahdleChangePassword = e => setPassword(e.target.value);
    const registerFunc = data => dispatch(authOperations.register(data));
    const loginFunc = data => dispatch(authOperations.logIn(data));

  const handleClickRegisterButton = () => {
    registerFunc({ email, password });
    reset();
  };
  
  const handleClickLoginButton = () => {
    loginFunc({ email, password });
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

     return (
    <div className={styles.wrapper}>
      <form className={styles.form} autoComplete="off">
        <p className={styles.form_titleGoogle}>
          Вы можете авторизироваться с помощью Google Account:
                 </p>
                 {/* TODO url.authGoogle() */}
        <a className={styles.form_googleLink} href="">
          <img className={styles.form_googleLogo} src={logo} alt="logo_google" />
          Google
        </a>
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

}

export default AuthForm;
