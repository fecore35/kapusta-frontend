import { Link } from 'react-router-dom';
import Router from '../../constants/router';
import s from './TopPanel.module.scss';
import Data from '../Data/Data.js'

export default function TopPanel({ showGoBack = false, showReport = false }) {
  return (
    <div className="container">
      <div className={s.header}>
        {showGoBack && <Link to={Router.DASHBOARD}>Вернуться на главную</Link>}

        <form className={s.balance}>
          <p className={s.title}>Баланс:</p>

          <label>
            <input
              className={s.balance__input + ' ' + s.balance__item}
              type="text"
              id="balance"
              placeholder="00.00 UAH"
            />
          </label>

          <button className={s.balance__btn + ' ' + s.balance__item}>
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
