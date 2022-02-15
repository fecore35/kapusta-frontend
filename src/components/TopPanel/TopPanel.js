import { Link } from 'react-router-dom';
import Router from '../../constants/router';
import Data from 'components/Data/Data.js';
import BalanceForm from 'components/BalanceForm/BalanceForm';
import s from './TopPanel.module.scss';

export default function TopPanel({
  showGoBack = false,
  showReport = false,
  showCalendar = false,
}) {
  return (
    <div className={s.inner}>
      <div className={s.left}>
        {showGoBack && <Link to={Router.DASHBOARD}>Вернуться на главную</Link>}
      </div>

      <div className={s.center}>
        <BalanceForm />
      </div>

      {showCalendar && (
        <div className={s.right}>
          <Data />
        </div>
      )}

      {showReport && (
        <div className={s.right}>
          <Link to={Router.REPORT} className={s.statistics}>
            Перейти к отчетам
          </Link>
        </div>
      )}
    </div>
  );
}
