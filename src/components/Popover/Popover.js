import s from "./Popover.module.scss";

const Popover = () => {
  return (
    <div className={s.popoverContainer}>
      <p className={s.popoverText}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.popoverTextComment}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
};

export default Popover;
