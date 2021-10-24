import { useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
// import stylesModal from "../Modal/Modal.module.scss";
import '../../base/sass/main.scss';
export default function Modal({ title, onClose, onClick }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const handleButtonClickNo = () => {
    onClose();
  };

  const handleButtonClickYes = () => {
    onClick();
    onClose();
  };

  return (
    <div onClick={handleBackdropClick}>
      <div>
        <button onClick={handleButtonClickNo}>
          <CloseIcon width="12" height="12" />
        </button>
        <h2>{title}</h2>
        <div>
          <button className='btn btn-accent' onClick={handleButtonClickYes}>Да</button>
          <button className='btn' onClick={handleButtonClickNo}>Нет</button>
        </div>
      </div>
    </div>
  );
}
