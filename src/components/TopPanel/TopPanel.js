import { Link } from 'react-router-dom';
import Router from '../../constants/router';
import s from './TopPanel.module.scss';
import Data from '../Data/Data.js'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {userPutBallance} from '../../redux/asyncthunc'

export default function TopPanel({ showGoBack = false, showReport = false }) {
  const dispatch = useDispatch();
  const ballanceQuery = useSelector(state => state.auth.balance);
 const rebalancing = useSelector(state => state.auth.rebalancing)
  const [ballance, setBallance] = useState('');

  useEffect(() => {
    if (rebalancing) {
     return setBallance(ballanceQuery)
    }
  }, [ballanceQuery]);

  const handleChange = (e) =>{
    if (!rebalancing) {
         if(!Number.isNaN(e.target.value)){
      return setBallance(parseFloat(e.target.value));       
   }
  }
  }

  const handleclick = (e) =>{
    e.preventDefault()
    if (!rebalancing & ballance !== "" ) {
      dispatch(userPutBallance(ballance))
    }
  }


  


  return (
    <div className="container">
      <div className={s.header}>
        {showGoBack && <Link to={Router.DASHBOARD}>Вернуться на главную</Link>}

        <form className={s.balance}>
          <p className={s.title}>Баланс:</p>

          <label>
            <input
            onChange={handleChange}
              className={s.balance__input + ' ' + s.balance__item}
              type="number"
              id="balance"
              placeholder="00.00 UAH"
              value={ballance}
              // onFocus={setBallance('')}
            />
          </label>

          <button onClick={handleclick} className={s.balance__btn + ' ' + s.balance__item}>
            ПОДТВЕРДИТЬ
          </button>
          <Data/>
        </form>

        {showReport && (
          <Link to={Router.REPORT} className={s.statistics}>
            Перейти к отчетам
          </Link>
        )}
      </div>
    </div>
  );
}
