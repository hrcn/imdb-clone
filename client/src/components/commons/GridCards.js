import React from 'react';
import { Col } from 'antd';
import { IMAGE_BASE_URL } from '../Config';

function GridCards(props) {
  if (props.actor) {
    return (
      <div>

      </div>
    );
  }
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: 'relative' }}>
        <a href={`/movie/${props.movieId}`}>
          <img style={{ width: '100%', height: '320px' }} alt="img" src={props.image} />
        </a>
      </div>
    </Col>
  );
}

export default GridCards;
