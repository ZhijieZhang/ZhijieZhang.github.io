import React from 'react';

import LinkableIcon from 'Components/LinkableIcon';

import selfy from 'Assets/selfy.jpg';
import './Info.css';

const Info = () => {
  return (
    <section className="info">
      <div className="info__main">
        <img className="info__img" src={selfy} alt="selfy" />
        <p className="info__name">Zhijie Zhang</p>
        <p className="info__job">PDFTron | Frontend Developer</p>
        <p className="info__address">Richmond, B.C.</p>
        <div className="info_icons">
          <LinkableIcon
            img="../../../assets/github-logo.svg"
            href="https://github.com/ZhijieZhang"
          />
          <LinkableIcon
            img=""
            href="https://www.linkedin.com/in/zhijie-zhang-a60767129/"
          />
        </div>
      </div>
      <div className="info__resume">

      </div>
    </section>
  );
};

export default Info;
