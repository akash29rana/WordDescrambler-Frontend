import React from 'react';
import '../css/Modal.css';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick} style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
      <div className="modal-content">
        <div className="modal-header">
        <h1>Definition of <span style={{ color: '#57BD91' }}>{title}</span></h1>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p className={content === 'Loading...' ? 'loading-message' : ''}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
