import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ hi, sub }) => {
  return (
    <>
      <h1>{hi}!!</h1>
      <p>{sub}</p>
    </>
  );
};

FirstApp.propTypes = {
  hi: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  sub: 'I am a paragraph',
};

export default FirstApp;
