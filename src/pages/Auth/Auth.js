import AuthArticle from "../../components/AuthArticle/AuthArticle";
import AuthForm from "../../components/AuthForm/AuthForm";
import s from './Auth.module.scss';

const Auth = () => {
  return (
    <div className={s.wrap}>
      <AuthArticle />
      <AuthForm />
    </div>
  );
};

export default Auth;
