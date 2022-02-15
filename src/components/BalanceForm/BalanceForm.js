import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userPutBallance } from 'redux/asyncthunc';
import ModalStartBalanse from 'components/ModalStartBalanse/ModalStartBalanse';

import s from './BalanceForm.module.scss';

const BalanceForm = () => {
  const dispatch = useDispatch();
  const ballanceQuery = useSelector(state => state.auth.balance);
  const rebalancing = useSelector(state => state.auth.rebalancing);
  const [ballance, setBallance] = useState('');
  useEffect(() => {
    if (rebalancing) {
      return setBallance(ballanceQuery);
    }
  }, [ballanceQuery]);
  const handleChange = e => {
    if (!rebalancing) {
      if (!Number.isNaN(e.target.value)) {
        return setBallance(parseFloat(e.target.value));
      }
    }
  };

  const handleclick = e => {
    e.preventDefault();
    if (!rebalancing & (ballance !== '')) {
      dispatch(userPutBallance(ballance));
    }
  };
  return (
    <form className={s.form}>
      <label htmlFor="balance" className={s.label}>
        Баланс:
      </label>
      <input
        type="number"
        id="balance"
        placeholder="00.00 UAH"
        value={ballance}
        className={s.input}
        onChange={handleChange}
      />

      <button className={s.btn} type="button" onClick={handleclick}>
        Подтвердить
      </button>
      {rebalancing === 0 && <ModalStartBalanse />}
    </form>
  );
};

export default BalanceForm;
