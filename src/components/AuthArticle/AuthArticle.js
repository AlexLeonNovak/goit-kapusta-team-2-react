import s from './AuthArticle.module.scss';

const AuthArticle = () => {
  return (
    <div className={s.article}>
            <h2 className={s.article__title}>Kapu$ta</h2>
            <p className={s.article__text}>Smart finance</p>
        </div>
  );
};

export default AuthArticle;
