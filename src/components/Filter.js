import React from 'react';

const Filter = () => {
  return (
    <React.Fragment>
      <h5>Select dates and availability</h5>
      <form className="filter">
        <input className="filter__input" type="text" placeholder="Destination" />
        <div className="filter__row">
          <input className="filter__input filter__input--50" type="text" placeholder="Check In" />
          <input className="filter__input filter__input--50" type="text" placeholder="Check Out" />
        </div>
        <input className="filter__input" type="text" placeholder="Guests" />
        <button className="btn filter__btn">SEARCH</button>
      </form>
    </React.Fragment>
  )
}

export default Filter;