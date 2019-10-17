import React from 'react';

const Hot = ({ hotReviews }) => {
  return (
    <div className="hot">
      <div className="hot__wrapper">
        <span className="hot__badge">HOT</span>
        <strong> {hotReviews} views</strong>
        <div className="hot__text">In the last 24 hours</div>
      </div>
    </div>
  )
}

export default Hot;