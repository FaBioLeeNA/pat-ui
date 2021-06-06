import React, { useContext } from 'react';
import { ModalContext } from './Modal';

const Header = (props) => {
  const { children, closeButton } = props;
  const { onHide } = useContext(ModalContext);

  return closeButton ? (
    <div className="modal-header">
      {children}
      <button className="my-close" onClick={onHide}>
        x
      </button>
    </div>
  ) : (
    <div className="modal-header">{children}</div>
  );
};

export default Header;
