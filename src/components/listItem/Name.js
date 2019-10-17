import React from 'react';

const Name = ({ name, year, place }) => {
  return (
    <div className="name">
      <h5 className="name__name">{name} <span className="name__year">{year}</span></h5>
      <div className="name__place">{place}</div>
    </div>
  )
}

export default Name;