import React from 'react';
import './ImageModal.css'

const ImageModal = ({ onClose, currentPhoto }) => {
  const { cityState, image, projectName  } = currentPhoto;

  return (
    <div className="modalbg" onClick={onClose}>
      <div className="modalbox">
            <img src={`${image}`} alt="current category" />
            <h4>{projectName}</h4>
            <p>{cityState}</p>
      </div>
    </div >
  );
};

export default ImageModal;
