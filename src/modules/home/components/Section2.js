import './styles.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Row, Col } from 'antd';

import InvestedBox from 'components/Box/InvestedBox';
import WalletBox from 'components/Box/WalletBox';

import { setTotalInvest } from '../redux/actions';

const Section2 = () => {
  const dispatch = useDispatch();
  const { system } = useSelector((state) => state.global);
  const { account } = useSelector((state) => state.auth);
  const { tron } = useSelector((state) => state.global);
  const { totalInvested } = useSelector((state) => state.home);

  useEffect(() => {
    if (tron !== null && tron !== undefined) {
      getTotalInvest();
    }
  }, [tron, account]);

  const getTotalInvest = async () => {
    const amount = await tron.totalInvest();

    dispatch(setTotalInvest(system, amount));
  };

  return (
    <>
      <div className="section-2">
        <Row gutter={[20, 20]}>
          <Col md={16} xs={24}>
            <InvestedBox title="Total invested" balance={totalInvested} currency="TRX" />
          </Col>
          <Col md={8} xs={24}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <WalletBox title="Your TRON Wallet" balance={account?.balance} currency="TRX" className="left" />
              </Col>
              <Col span={24}>
                <WalletBox title="Your Wallet Balance" balance={account?.balance} currency="TRX" className="right" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default injectIntl(Section2);
