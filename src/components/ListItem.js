import React from 'react';
import { ReactComponent as Heart } from '../img/heart.svg';
import { ReactComponent as Questionmark } from '../img/question.svg';
import { ReactComponent as Star } from '../img/star.svg';

const ListItem = ({ img, name, year, place, liked, hot, hotReviews, length, cabins, guests, reviews, tags, sailType, extras, price }) => {
  return (
    <div className="list-item">
      <div className="list-item__left">
        <div className="list-item__recommended">Zizoo recommended</div>
        <div className="list-item__img-wrapper">
          <img className="list-item__img" src={img} alt={name} />
        </div>
      </div>
      <div className="list-item__right">
        <div className="list-item__row list-item__row--grey">
          <div className="list-item__part list-item__part--full list-item__part--justify">
            <div className="list-item__name-wrapper">
              <h5 className="list-item__name">{name} <span className="list-item__year">{year}</span></h5>
              <div className="list-item__place">{place}</div>
            </div>
            <div className={liked ? 'list-item__heart list-item__heart--liked' : 'list-item__heart'}>
              <Heart />
            </div>
          </div>
          <div className="list-item__part list-item__part--center list-item__part--inner">
            <div className="list-item__inner-part">
              <div className="list-item__hot">
                <span className="list-item__hot-badge">HOT</span>
                <strong> {hotReviews} views</strong>
                <div className="list-item__hot-text">In the last 24 hours</div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item__row">
          <div className="list-item__part list-item__part--justify list-item__part--bigger list-item__part--inner">
            <div className="list-item__inner-part list-item__inner-part--border-right">
              <div>
                <div className="list-item__subheading">{length}</div>
                <div className="list-item__text">LENGTH</div>
              </div>
            </div>
            <div className="list-item__inner-part list-item__inner-part--border-right">
              <div>
                <div className="list-item__subheading">{cabins}</div>
                <div className="list-item__text">CABINS</div>
              </div>
            </div>
            <div className="list-item__inner-part">
              <div>
                <div className="list-item__subheading">{guests}</div>
                <div className="list-item__text">GUESTS</div>
              </div>
            </div>
          </div>
          <div className="list-item__part list-item__part--smaller list-item__part--inner list-item__part--center">
            <div className="list-item__inner-part">
              <div>
                <div className="list-item__stars"><Star /></div>
                <div className="list-item__text">{`${reviews} REVIEWS`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item__row list-item__row--mobile">
          <div className="list-item__part list-item__part--bigger list-item__part--details">
            <div className="list-item__inner-row list-item__inner-row--tags">
              <div className="list-item__tags">
                {tags.map((tag, index) => {
                  return <span key={index} className="list-item__tag">{tag}</span>;
                })}
              </div>
            </div>
            <div className="list-item__inner-part list-item__inner-part--columns">
              <div className="list-item__inner-column">
                <div className="list-item__text list-item__inner-row">SAIL TYPE</div>
                <div className="list-item__text list-item__inner-row">FREE EXTRAS</div>
              </div>
              <div className="list-item__inner-column">
                <div className="list-item__text-bold list-item__inner-row">{sailType}</div>
                <div className="list-item__text-bold list-item__inner-row">
                  {extras.map((extra, index) => {
                    return <span key={index} className="list-item__extra">{extra}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__part list-item__part--smaller list-item__part--inner list-item__part--bottom">
            <div className="list-item__weekly-wrapper">
              <div className="list-item__inner-part list-item__inner-part--weekly">
                <span className="list-item__text">FROM</span>
                <span className="list-item__price"><strong className="list-item__price-amount">€{price}</strong> <span className="list-item__text-bold">weekly</span></span>
                <span className="list-item__question"><Questionmark /></span>
              </div>
              <div className="list-item__inner-part">
                <div className="list-item__direct-wrapper">
                  <div className="list-item__direct">
                    <div className="list-item__text-bold">🗲 DIRECT BOOKING</div>
                  </div>
                  <button className="btn btn--arrow">VIEW DETAILS<span className="btn__apex"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ListItem;