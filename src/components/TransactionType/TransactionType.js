import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reportType } from 'redux/report/reportReducer';
import { reportSelectors } from 'redux/report';
import Button from 'components/Button/Button';
import s from './TransactionType.module.scss';

import arrowLeft from '../../icons/arrow-l.svg';
import arrowRight from '../../icons/arrow-r.svg';

function TransactionType() {
  const dispatch = useDispatch();
  const transactionType = useSelector(reportSelectors.getReportType);

  const [type, setType] = useState('......');

  const onChangeTypeHandler = () => {
    if (transactionType) {
      return dispatch(reportType(false));
    }

    dispatch(reportType(true));
  };

  useEffect(() => {
    if (transactionType) {
      return setType('Доход');
    }
    setType('Расход');
  }, [transactionType]);

  return (
    <div className={s.control}>
      <Button className={s.button} onClick={onChangeTypeHandler}>
        <img src={arrowLeft} width="4" height="10" alt="" />
      </Button>
      <div className={s.title}>{type}</div>
      <Button className={s.button} onClick={onChangeTypeHandler}>
        <img src={arrowRight} width="4" height="10" alt="" />
      </Button>
    </div>
  );
}

export default TransactionType;
