import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';
import Title from './Title';
import Footer from './Footer';

export const ModalContext = React.createContext();

const Modal = (props) => {
  const { children, show, onHide } = props;

  if (show) {
    let elementModalInBody = document.getElementsByClassName('modal');
    if (!elementModalInBody.length) {
      let modal = document.createElement('div');
      let backdrop = document.createElement('div');

      modal.classList.add('modal');
      backdrop.classList.add('modal-backdrop');
      backdrop.style.pointerEvents = 'auto';
      backdrop.onclick = () => {
        console.log('clicked');
      };
      let body = document.body;

      body.appendChild(backdrop);
      body.appendChild(modal);
    }
  } else {
    let modal = document.getElementsByClassName('modal');
    let bd = document.getElementsByClassName('modal-backdrop');
    if (modal.length) {
      modal[0].remove();
      bd[0].remove();
    }
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (show) {
        if (e.keyCode === 27) {
          onHide();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [show, onHide]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <div>
      <ModalContext.Provider value={{ onHide }}>
        <div className="modal-dialog">
          <div className="modal-content my-fade">{children}</div>
        </div>
      </ModalContext.Provider>
    </div>,
    document.getElementsByClassName('modal')[0]
  );
};

Modal.Footer = Footer;
Modal.Title = Title;
Modal.Header = Header;
Modal.Body = Body;

export default Modal;
