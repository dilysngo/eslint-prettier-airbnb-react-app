import './styles.scss';
import React from 'react';
import { injectIntl } from 'react-intl';
import { Row, Col } from 'antd';

import InfomationBox from 'components/Box/InfomationBox';
import ExplainBox from 'components/Box/ExplainBox';

const Section3 = () => {
  const data = [
    {
      img: 'icon-15.png',
      title: 'Term Lock',
      content:
        'User can lock multiple packages with a minimum value of 200 TRX each. At maturity, the system will automatically unlock and pay interest. When the user requests a withdrawal, the system will allow a withdrawal with a minimum withdrawal value of 5TRX.',
    },
    {
      img: 'icon-15.png',
      title: 'Dividend Distribute',
      content:
        'TRON smart contract set 4 tiers of referral rewards, which are 5%, 3%, 1% and 0.5% respectively. The referral rewards are distributed to your balance automatically and you can withdraw at anytime.',
    },
    {
      img: 'icon-15.png',
      title: 'Referral Program',
      content:
        'TRON smart contract generates 0.2 - 1.2% dividends per day based on your investment and distribute your dividends to your balance. For example, if you invest in the 1.2% plan, then you will get over 100% of your first deposit in 83 days. The dividends generate every second and you can withdraw or reinvest your dividends each second. When you reinvest, the total investment would increase and you will get more dividends.',
    },
  ];

  const data2 = [
    {
      img: 'icon-15.png',
      title: 'How to invest on desktop?',
      content:
        'You can install the TronLink or TronPay extension on Chorm. After the installation, you can create a new TRX wallet or import an existing TRX wallet, and then transfer the TRX from the exchange to the wallet. Finally, login on TronLink or Tronpay to.',
    },
    {
      img: 'icon-15.png',
      title: 'How to invest on mobile?',
      content:
        'You can download TronWallet app from application store. After the installation, you can create a new TRX wallet or import an existing TRX wallet, and then transfer the TRX from the exchange to the wallet. Finally, find TRON DEFI within the wallet app',
    },
    {
      img: 'icon-15.png',
      title: 'How is the fund distributed?',
      content: 'Technical support: 3% Marketing: 3% Referral: 5% - 2% - 0.5% Invitee: 0.5%',
    },
    {
      img: 'icon-15.png',
      title: 'What is the referral program?',
      content: 'TRON DEFI smart contract set 5 tier or referral reward, which are 5%, 3%, 1%, 0.5% and 0.5% respectively',
    },
  ];

  return (
    <div className="section-4">
      <Row gutter={[25, 25]} className="mb-5r">
        {data.map((ele, index) => (
          <Col key={index} md={8} xs={24}>
            <InfomationBox data={ele} />
          </Col>
        ))}
      </Row>
      <Row gutter={[30, 30]} className="explain mb-5r">
        <Col sm={12} xs={24}>
          <img className="img-left" src={require('assets/images/icon-7.png')} alt="" />
        </Col>
        <Col sm={12} xs={24}>
          {data2.map((ele, index) => (
            <ExplainBox key={index} data={ele} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default injectIntl(Section3);
