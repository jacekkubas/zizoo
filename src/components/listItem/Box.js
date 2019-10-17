import React from 'react';

const Box = ({ type, value, border }) => {
  return (
    <div className={border ? 'box box--border-right' : 'box'}>
      <div>
        <div className="box__subheading">{value}</div>
        <div className="box__text">{type}</div>
      </div>
    </div>
  )
}

export default Box;