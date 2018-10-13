import React from 'react';

const LinkableIcon = ({ img, href }) => {
  const src = require('svg-url-loader!Assets/github-logo.svg');

  return (
    <a href={href}>
      <img src={img} alt="" />
    </a>
  );
};

export default LinkableIcon;
