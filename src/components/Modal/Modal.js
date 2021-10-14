import { Component } from "react";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import stylesModal from "../Modal/Modal.module.scss";


export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  handleButtonClickNo = () => {
    this.props.onClose();
  };

  handleButtonClickYes = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className={stylesModal.Overlay} onClick={this.handleBackdropClick}>
        <div className={stylesModal.modal}>
          <button
            className={stylesModal.modalClose}
            onClick={this.handleButtonClickNo}
          >
            <CloseIcon width='12' height='12' />
          </button>
          <h2 className={stylesModal.modalTitle}>{this.props.title}</h2>
          <div className={stylesModal.modalButtonBlock}>
            <button
              className={stylesModal.modalButtonYes}
              onClick={this.handleButtonClickYes}
            >
              Да
            </button>
            <button
              className={stylesModal.buttonModal}
              onClick={this.handleButtonClickNo}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    );
  }
}
