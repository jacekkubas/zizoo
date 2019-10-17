import React from 'react';
import { ReactComponent as Questionmark } from '../../img/question.svg';

const Weekly = ({ price }) => {
  return (
    <div className="weekly">
      <span className="text">FROM</span>
      <span className="weekly__price"><strong className="weekly__price-amount">€{price}</strong> <span className="text-bold">weekly</span></span>
      <span className="weekly__question"><Questionmark /></span>
    </div>
  )
}

export default Weekly;