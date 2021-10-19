import { useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from "../../images/left-arrow.svg";
import s from "./ClickBack.module.scss";

const ClickBack = () => {
  const history = useHistory();

  const handleClickBack = () => {
    history.push("/");
  };

  return (
    <div>
      {
        <button className={s.arrowBtn} type="button" onClick={handleClickBack}>
          <Arrow className={s.arrowSvg} />
          <p className={s.backText}>Вернуться на главную</p>
        </button>
      }
    </div>
  );
};

export default ClickBack;
