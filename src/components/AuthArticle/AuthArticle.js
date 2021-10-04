import styles from './AuthArticle.module.scss';

const AuthArticle = () => {
    return (
        <div className={styles.article}>
            <h2 className={styles.article__title}>Kapu$ta</h2>
            <p className={styles.article__text}>Smart finance</p>
        </div>
    );
};

export default AuthArticle;