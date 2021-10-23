import { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

// import styles from '../AuthForm/AuthForm.module.scss';
import logo from "../../images/logo.png";
import { authOperations } from "../../redux/auth";
import '../../base/sass/main.scss';

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const hahdleChangeEmail = (e) => setEmail(e.target.value);
  const hahdleChangePassword = (e) => setPassword(e.target.value);
  const registerFunc = (data) => dispatch(authOperations.register(data));
  const loginFunc = (data) => dispatch(authOperations.logIn(data));
  const googleAuth = (token) => dispatch(authOperations.googleAuth(token));

  const handleClickRegisterButton = () => {
    registerFunc({ email, password });
    reset();
  };

  const handleClickLoginButton = () => {
    loginFunc({ email, password });
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const responseGoogleSuccess = (response) => {
    googleAuth(response.tokenId);
  };

  const responseGoogleFail = (response) => {
    console.log(response);
  };

  return (
    <div>
      <form autoComplete="off">
        <p>Вы можете авторизироваться с помощью Google Account:</p>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFail}
          cookiePolicy={"single_host_origin"}
          render={(props) => (
            <button {...props}>
              <img src={logo} alt="logo_google" />
              Google
            </button>
          )}
        />
        <param>
          Или зайти в приложение с помощью e-mail и пароля, предварительно
          зарегестрировавшись:
        </param>
        <div>
          <label htmlFor="email">Электронная почта:</label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={hahdleChangeEmail}
              required
              placeholder="your@email.com"
            />
          </div>
          <label htmlFor="password">Пароль:</label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={hahdleChangePassword}
              required
              placeholder="Пароль"
            />
          </div>
          <div>
            <button className='btn btn-accent' onClick={handleClickLoginButton} type="button">
              Войти
            </button>
            <button className='btn' onClick={handleClickRegisterButton} type="button">
              Регистрация
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
