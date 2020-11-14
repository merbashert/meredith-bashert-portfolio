import React from 'react';
import './Modal.css';


const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="overlay">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};


export default Modal;
