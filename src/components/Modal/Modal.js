import { useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import stylesModal from "../Modal/Modal.module.scss";

export default function Modal({ title, onClose, onClick }) {

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    }

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
    <div className={stylesModal.Overlay} onClick={handleBackdropClick}>
      <div className={stylesModal.modal}>
        <button
          className={stylesModal.modalClose}
          onClick={handleButtonClickNo}
        >
          <CloseIcon width='12' height='12' />
        </button>
        <h2 className={stylesModal.modalTitle}>{title}</h2>
        <div className={stylesModal.modalButtonBlock}>
          <button
            className={stylesModal.modalButtonYes}
            onClick={handleButtonClickYes}
          >
            Да
          </button>
          <button
            className={stylesModal.buttonModal}
            onClick={handleButtonClickNo}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
