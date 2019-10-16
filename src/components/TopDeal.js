import React from 'react';

const TopDeal = ({ image, name, type, price, newPrice }) => {
  return (
    <div className="top-deal">
      <div className="top-deal__image"><img src={image} alt={name} /></div>
      <div className="top-deal__texts">
        <h5 className="top-deal__name">{name}</h5>
        <div className="top-deal__type">{type}</div>
        <hr />
        <strike className="top-deal__price">${price}</strike>
        <div className="top-deal__new-price">
          <span className="top-deal__deal">{Math.ceil(((newPrice / price) * 100) - 100)}%</span>
          ${newPrice}
        </div>
      </div>
    </div>
  )
}

export default TopDeal;