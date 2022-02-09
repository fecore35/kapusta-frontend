import { Outlet, Link, NavLink } from 'react-router-dom';
import s from './AppOperation.module.scss';
import { Costs } from 'components/Costs/Costs';
import { Profit } from 'components/Profit/Profit';

export function AppOperation() {
  return (
    <>
      <div className={s.operation}>
        <NavLink className={s.costs + ' ' + s.link} to="/userPage/costs">
          РАСХОД
        </NavLink>
        <NavLink className={s.profit + ' ' + s.link} to="/userPage/profit">
          ДОХОД
        </NavLink>
      </div>

      <Outlet />
    </>
  );
}
