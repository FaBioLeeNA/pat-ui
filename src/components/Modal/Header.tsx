import React, { useContext, FC } from 'react';
import { ModalContext } from './Modal';

export interface IHeaderProps {
  /**creates an X element if true */
  closeButton?: boolean
}

const Header:FC<IHeaderProps> = (props) => {
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
