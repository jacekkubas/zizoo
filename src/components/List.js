import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      offers: [
        {
          id: 1,
          img: 'https://res.cloudinary.com/zizoo/image/upload/t_optim/v1/Media/2477.jpg',
          name: 'Jeannau Sun Odyssey 45.2',
          year: 2001,
          place: 'Split, Croatia',
          liked: false,
          hot: true,
          hotReviews: 69,
          length: '12.04m',
          cabins: 4,
          guests: 10,
          stars: 5,
          reviews: 72,
          tags: ['Sicherungsshein', 'Luxury'],
          sailType: 'Rolling Mainsail',
          extras: ['AirCon', 'WiFi', 'Very Long Extra Description'],
          price: '1,083.00',
          direct: true
        },
        {
          id: 2,
          img: 'https://res.cloudinary.com/zizoo/image/upload/t_optim/v1/Media/2474.png',
          name: 'Jeannau Sun Odyssey 45.2',
          year: 2018,
          place: 'Vieste, Italy',
          liked: true,
          hot: true,
          hotReviews: 45,
          length: '12.04m',
          cabins: 6,
          guests: 14,
          stars: 5,
          reviews: 68,
          tags: ['Sicherungsshein', 'Luxury', 'Sicherung', 'Luxury', 'Very long tag with tick'],
          sailType: 'Two sails',
          extras: ['AirCon', 'WiFi', 'Very Long Extra Description', 'AirCon', 'WiFi'],
          price: '2,000.00',
          direct: true
        }
      ]
    }
  }

  render() {
    const { offers } = this.state;

    return (
      <section className="list">
        {offers.map((offer) => {
          return <ListItem key={offer.id} {...offer} />
        })}
      </section>
    )
  }
}

export default List;