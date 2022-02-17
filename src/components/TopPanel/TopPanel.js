import { Link } from 'react-router-dom';
import Router from '../../constants/router';
import Data from 'components/Data/Data.js';
import BalanceForm from 'components/BalanceForm/BalanceForm';
import s from './TopPanel.module.scss';
import Media from 'react-media';

export default function TopPanel({
  showGoBack = false,
  showReport = false,
  showCalendar = false,
}) {
  return (
    <div className={s.inner}>
      <div className={`${s.left} ${s.back}`}>
        {showGoBack && (
          <Link to={Router.DASHBOARD} className={`${s.link} ${s.back}`}>
            <i className={s.iconBack}></i>
            <Media
              query="(min-width: 768px)"
              render={() => <>Вернуться на главную</>}
            />
          </Link>
        )}
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
          <Link to={Router.REPORT} className={s.link}>
            <p style={{ marginRight: 20 }}>Перейти к отчетам</p>
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.2h3V14H0V4.2ZM5.6 0h2.8v14H5.6V0Zm5.6 8H14v6h-2.8V8Z"
                fill="#52555F"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
