import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import s from './AppOperation.module.scss';

export function AppOperation() {
  const [tab, setTab] = useState('income');

  return (
    <>
      <div className={s.operation}>
        <button
          className={s.costs + ' ' + s.link}
          type="button"
          onClick={() => setTab('income')}
        >
          доход
        </button>
        <button
          className={s.profit + ' ' + s.link}
          type="button"
          onClick={() => setTab('consumption')}
        >
          расход
        </button>
      </div>

      <Outlet />
    </>
  );
}
