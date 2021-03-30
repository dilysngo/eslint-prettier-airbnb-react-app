import './styles.scss';
import React from 'react';
import { injectIntl } from 'react-intl';

import { ButtonMain } from '../../../components/ButtonDapp/index';

const Section1 = () => {
  const investNow = () => {
    const div = document.getElementById('plan0');
    div.scrollIntoView();
  };

  return (
    <>
      <div className="section-1 ">
        <div className="bg-1">
          <img src={require('assets/images/icon-2.png')} width={140} height={140} alt="" />
          <img src={require('assets/images/icon-3.png')} width={140} height={140} alt="" />
          <img src={require('assets/images/icon-6.png')} alt="" />
          <div className="content">
            <div className="mb-2r">
              <span className="box-text-1">Get 0.2% - 1.2% Per Day!</span>
            </div>
            <p>Decentralized & Secure Smart Contract Fund</p>
            <ButtonMain onClick={investNow}>Invest Now</ButtonMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default injectIntl(Section1);
