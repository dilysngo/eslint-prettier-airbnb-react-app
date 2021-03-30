import './styles.scss';
import React from 'react';
import { injectIntl } from 'react-intl';

import DividendsBox from 'components/Box/DividendsBox';
import ReferralsBox from 'components/Box/ReferralsBox';
import MyInvestmentBox from 'components/Box/MyInvestmentBox';

const Section3 = () => (
  <div className="section-4">
    <div className="gradien-title mb-2r">Dividends</div>
    <DividendsBox />
    <div className="gradien-title mb-2r">Referrals</div>
    <ReferralsBox />
    <div className="gradien-title mb-2r">My Investment</div>
    <MyInvestmentBox />
  </div>
);

export default injectIntl(Section3);
