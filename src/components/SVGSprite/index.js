import React from 'react';

const SVGSprite = () => (
  <svg
    aria-hidden="true"
    style={{
      height: 0,
      overflow: 'hidden',
      position: 'absolute',
      width: 0
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <symbol id="icon-caret" viewBox="0 0 10.8 6.6">
      <polygon points="5.4,6.6 0,0.7 0.7,0 5.4,5.1 10.1,0 10.8,0.7 " />
    </symbol>
  </svg>
);

export default SVGSprite;
