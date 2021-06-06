import React, { useState } from 'react';
import Modal, { ModalContext } from './Modal';
import Button from '../Button'

export default {
    title: 'Modal',
    component: Modal,
};

export const DefaultModal = () => {

  return <ModalContext.Provider value={{onHide: ()=>{}}}>
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
          <button onClick={()=>{}}>
            Close
          </button>
          <button onClick={()=>{}}>
            Save Changes
          </button>
        </Modal.Footer>
      </div>
    </div>

  </ModalContext.Provider>
};
