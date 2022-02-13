import { useSelector } from 'react-redux';
import { reportSelectors } from 'redux/report';
import { makeNumber } from '../../helpers/makeNumber';
import s from './StatisticsHeader.module.scss';

export function StatisticsHeader() {
  const profit = useSelector(reportSelectors.getIncome);
  const costs = useSelector(reportSelectors.getCosts);

  return (
    <div className={`section ${s.section}`}>
      <div className="container">
        <div className={`section__inner ${s.inner}`}>
          <div className={s.statistic}>
            <div className={s.costs__item + ' ' + s.statistic__item}>
              <h3 className={s.title}>Расходы: </h3>

              <div className={s.statistic__costs + ' ' + s.item}>
                <p className={s.costs}> - {makeNumber(costs)} грн.</p>
              </div>
            </div>

            <div className={s.profit__item + ' ' + s.statistic__item}>
              <h3 className={s.title}>Доходы: </h3>

              <div className={s.statistic__profit + ' ' + s.item}>
                <p className={s.profit}> + {makeNumber(profit)} грн. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
