import './styles.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { toast } from 'react-toastify';

import PlanBox from 'components/Box/PlanBox';
import Misc from 'helpers/Misc';
import Tracking from 'services/Affiliate/Tracking';

import { setPlanInfo } from '../redux/actions';

const Section3 = () => {
  const dispatch = useDispatch();
  const { system } = useSelector((state) => state.global);
  const { listPlan } = useSelector((state) => state.home);
  const { tron } = useSelector((state) => state.global);

  // Handle data for Plan
  useEffect(() => {
    if (tron !== null && tron !== undefined) {
      getPlanInfo();
    }
  }, [tron]);

  async function getPlanInfo() {
    try {
      const arr = [];

      for (const i in listPlan) {
        const result = await tron.getPlanInfo(listPlan[i].plan);

        if (i === 0 && result === false) break;

        await Misc.sleep(200);

        arr.push({
          ...listPlan[i],
          realProfit: result.percent,
          content: {
            time: result.time,
            profit: result.percent,
            investment: 200,
            fee: 2.5,
            currency: 'TRX',
          },
        });
      }

      arr.length > 0 && dispatch(setPlanInfo(system, arr));
    } catch (e) {
      await Misc.sleep(4000);

      await getPlanInfo();

      console.error(e);
    }
  }

  // Handle ref
  const [ref, setRef] = useState('');
  useEffect(() => {
    const tracking = new Tracking();

    if (tracking.getAffiliate() !== '') {
      setRef(tracking.getAffiliate());
    }
  }, []);

  async function handleInvest(data, amount) {
    if (tron === null) {
      toast.dismiss();

      return toast.error('To continue please login to your Tron wallet (TronLink, etc.)', {
        position: 'top-center',
        autoClose: 8000,
      });
    }

    const verifyNetwork = await tron.verifyNetwork(system);
    if (!verifyNetwork) return;

    //= > Start invest
    const response = await tron.investPackage(system, ref, data.plan, amount);

    if (response.result === false) {
      toast.error(response.error, {
        position: 'top-center',
        autoClose: 5000,
      });
    } else {
      toast.success('Investment Success.', {
        position: 'top-center',
        autoClose: 5000,
      });
    }

    await Misc.sleep(1000);
  }

  return (
    <div className="section-3">
      <Row gutter={[30, 30]}>
        {listPlan.map((item, index) => (
          <Col key={index} xl={8} lg={12} xs={24}>
            <PlanBox id={`plan${index}`} data={item} onClick={handleInvest} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Section3;
