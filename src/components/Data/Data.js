import monthHelper from '../../helpers/monthHelper.js';
import s from './data.module.scss';
import { useState } from 'react';
import arrowLeft from '../../icons/arrow-l.svg';
import arrowRight from '../../icons/arrow-r.svg';
const dateNow = new Date();
function Data() {
  const [month, setMonth] = useState(monthHelper(dateNow.getMonth()));
  const [year, setYear] = useState(dateNow.getFullYear());
  console.log(dateNow);
  const handleDecrementMonth = () => {
    dateNow.setMonth(dateNow.getMonth() - 1);
    if (month === 'Январь') {
      setYear(dateNow.getFullYear());
    }
    return setMonth(monthHelper(dateNow.getMonth()));
  };
  const handleIncrementMonth = () => {
    dateNow.setMonth(dateNow.getMonth() + 1);
    if (month === 'Декабрь') {
      setYear(dateNow.getFullYear());
    }
    return setMonth(monthHelper(dateNow.getMonth()));
  };
  return (
    <div className={s.dateContainer}>
      <p className={s.description}>Текущий период:</p>
      <div className={s.date}>
        <button
          className={s.button}
          type="button"
          onClick={handleDecrementMonth}
        >
          <img src={arrowLeft} width="4" height="10" alt="" />
        </button>
        <p className={s.currentDate}>
          <span className={s.month}>{month}</span>{' '}
          <span className={s.year}>{year}</span>
        </p>
        <button
          className={s.button}
          type="button"
          onClick={handleIncrementMonth}
        >
          <img src={arrowRight} width="4" height="10" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Data;