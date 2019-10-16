import React from 'react';
import TopDeal from './TopDeal';

class TopDeals extends React.Component {
  constructor() {
    super();
    this.state = {
      topDeals: [
        {
          id: 1,
          image: 'https://d1pkcile4c5gsr.cloudfront.net/boat/0003/23/thumb_222129_boat_expose_414x242.jpeg',
          name: 'Lagoon 400 S2 (2015)',
          type: 'Catamaran',
          price: 2200,
          newPrice: 1980,
        },
        {
          id: 2,
          image: 'https://d1pkcile4c5gsr.cloudfront.net/boat/0003/23/thumb_222129_boat_expose_414x242.jpeg',
          name: 'Lagoon 400 S2 (2013)',
          type: 'Catamaran',
          price: 7346,
          newPrice: 5987,
        },
        {
          id: 3,
          image: 'https://d1pkcile4c5gsr.cloudfront.net/boat/0003/23/thumb_222129_boat_expose_414x242.jpeg',
          name: 'Dufour 482 (2015)',
          type: 'Sailboat',
          price: 1250,
          newPrice: 875,
        },
      ]
    }
  }

  render() {
    const { topDeals } = this.state;

    return (
      <div className="top-deals">
        <h2>Time Limited: Our Top Deals</h2>
        <div className="top-deals__wrapper">
          {topDeals.map((topDeal) => {
            return <TopDeal key={topDeal.id} {...topDeal} />
          })}
        </div>
      </div>
    )
  }
}

export default TopDeals;