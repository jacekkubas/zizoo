import React from 'react';
import { ReactComponent as Star } from '../../img/star.svg';

const Stars = ({ reviews }) => {
  return (
    <div className="stars">
      <div className="stars__inner">
        <div className="stars__wrapper"><Star /></div>
        <div className="text">{`${reviews} REVIEWS`}</div>
      </div>
    </div>
  )
}

export default Stars;