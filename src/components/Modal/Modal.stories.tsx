import React, { useState } from 'react';
import Modal, { ModalContext } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

// export const ModalDesign = () => {
//   return (
//     <ModalContext.Provider value={{ onHide: () => {} }}>
//       <div className="modal-dialog">
//         <div className="modal-content my-fade">
//           <Modal.Header closeButton>
//             <Modal.Title>Modal Header</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             Modal Body
//             <br />
//             Add Things Here
//           </Modal.Body>
//           <Modal.Footer>
//             <button onClick={() => {}}>Close</button>
//             <button onClick={() => {}}>Save Changes</button>
//           </Modal.Footer>
//         </div>
//       </div>
//     </ModalContext.Provider>
//   );
// };

export const Demo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const btn = {
    display: 'inline-block',
    // fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    // textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    borderRadius: '.25rem',
  };
  const primary = {
    color: '#fff',
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
  };
  const secondary = {
    color: '#fff',
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
  };

  return (
    <div>
      <h3>Static Modal</h3>
      <ModalContext.Provider value={{ onHide: () => {} }}>
      <div className="modal-dialog">
        <div className="modal-content my-fade">
          <Modal.Header closeButton>
            <Modal.Title>Modal Header</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Modal Body
            <br />
            Add Things Here
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => {}}>Close</button>
            <button onClick={() => {}}>Save Changes</button>
          </Modal.Footer>
        </div>
      </div>
      </ModalContext.Provider>

      <h3>Live Demo</h3>
      <button style={{...btn, ...primary}} onClick={handleShow}>Demo</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Header</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button style={{ ...btn, ...secondary }} onClick={handleClose}>
            Close
          </button>
          <button style={{ ...btn, ...primary }} onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
