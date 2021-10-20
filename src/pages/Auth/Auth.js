import AuthArticle from "../../components/AuthArticle/AuthArticle";
import AuthForm from "../../components/AuthForm/AuthForm";
// import styles from './Auth.module.scss';
import { ToastContainer } from "react-toastify";

const Auth = () => {
  return (
    <div>
      <AuthArticle />
      <AuthForm />
      <ToastContainer />
    </div>
  );
};

export default Auth;
