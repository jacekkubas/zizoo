import React from 'react';
import { ReactComponent as HeartSVG } from '../../img/heart.svg';

const Heart = ({ liked }) => {
  return (
    <div className={liked ? 'heart heart--liked' : 'heart'}>
      <HeartSVG />
    </div>
  )
}

export default Heart;