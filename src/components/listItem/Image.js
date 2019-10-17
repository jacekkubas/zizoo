import React from 'react';

const Image = ({ img, name }) => {
  return (
    <div className="image">
      <div className="image__recommended">Zizoo recommended</div>
      <div className="image__img-wrapper">
        <img className="image__img" src={img} alt={name} />
      </div>
    </div>
  )
}

export default Image;