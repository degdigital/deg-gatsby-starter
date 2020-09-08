import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = ({ id, classNames }) => (
  <svg
    className={classnames('icon', classNames)}
    aria-hidden="true"
    focusable="false"
  >
    <use xlinkHref={`#icon-${id}`} href={`#icon-${id}`} />
  </svg>
);

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  classNames: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

Icon.defaultProps = {
  id: []
};

export default Icon;
