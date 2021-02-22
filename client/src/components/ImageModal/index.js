import React from 'react';

const ImageModal = ({ onClose, currentPhoto }) => {
  const { company, category, image  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{company} </h3>
        <img src={`${image}`} alt="current category" />
        <p>
          pop test
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
