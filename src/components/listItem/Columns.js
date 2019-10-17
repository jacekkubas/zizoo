import React from 'react';

const Tags = ({ sailType, extras }) => {
  return (
    <div className="columns">
      <div className="columns__column">
        <div className="text columns__inner-row">SAIL TYPE</div>
        <div className="text columns__inner-row">FREE EXTRAS</div>
      </div>
      <div className="columns__column">
        <div className="text-bold columns__inner-row">{sailType}</div>
        <div className="text-bold columns__inner-row">
          {extras.map((extra, index) => {
            return <span key={index} className="columns__extra">{extra}</span>;
          })}
        </div>
      </div>
    </div>
  )
}

export default Tags;