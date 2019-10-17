import React from 'react';
import Image from './Image';
import Name from './Name';
import Heart from './Heart';
import Hot from './Hot';
import Box from './Box';
import Stars from './Stars';
import Tags from './Tags';
import Columns from './Columns';
import Weekly from './Weekly';
import Direct from './Direct';

const ListItem = ({ img, name, year, place, liked, hotReviews, length, cabins, guests, reviews, tags, sailType, extras, price }) => {
  return (
    <div className="list-item">
      <Image img={img} name={name} />
      <div className="list-item__right">
        <div className="list-item__row list-item__row--grey">
          <div className="list-item__part list-item__part--full list-item__part--justify">
            <Name name={name} year={year} place={place} />
            <Heart liked={liked} />
          </div>
          <div className="list-item__part list-item__part--center list-item__part--inner">
            <Hot hotReviews={hotReviews} />
          </div>
        </div>
        <div className="list-item__row">
          <div className="list-item__part list-item__part--justify list-item__part--bigger list-item__part--inner">
            <Box type={'length'} value={length} border={true} />
            <Box type={'cabins'} value={cabins} border={true} />
            <Box type={'guests'} value={guests} />
          </div>
          <div className="list-item__part list-item__part--smaller list-item__part--inner list-item__part--center">
            <Stars reviews={reviews} />
          </div>
        </div>
        <div className="list-item__row list-item__row--mobile">
          <div className="list-item__part list-item__part--bigger list-item__part--details">
            <Tags tags={tags} />
            <Columns sailType={sailType} extras={extras} />
          </div>
          <div className="list-item__part list-item__part--smaller list-item__part--inner list-item__part--bottom">
            <div className="list-item__last">
              <Weekly price={price} />
              <Direct />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ListItem;