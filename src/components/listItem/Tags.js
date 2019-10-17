import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <div className="tags__wrapper">
        {tags.map((tag, index) => {
          return <span key={index} className="tags__item">{tag}</span>;
        })}
      </div>
    </div>
  )
}

export default Tags;