import React from 'react';
import './index.scss';
import Portal from '../Portal';

const Modal = ({ className, visible, onClose, children }) => {
  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <Portal elementId="modal-root">
      <div className="modal__overlay" data-visible={visible}>
        <div
          className={
            className ? `modal__wrapper--${className}` : 'modal__wrapper'
          }
          tabIndex="-1"
          data-visible={visible}
        >
          <div className="modal__inner" tabIndex="0">
            <button className="modal-close" onClick={close}>
              Close Button
            </button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
