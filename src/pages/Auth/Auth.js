import AuthArticle from '../../components/AuthArticle/AuthArticle';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './Auth.module.scss';
import { ToastContainer } from 'react-toastify';

const Auth = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
        <AuthArticle />
        <AuthForm />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Auth;