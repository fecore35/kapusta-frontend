import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import s from './AppOperation.module.scss';

export function AppOperation() {
  const [tab, setTab] = useState('income');
  let costs = s.link;
  let profit = s.link;

  if (tab === 'income') {
    costs += ` ${s.active}`;
  } else {
    profit += ` ${s.active}`;
  }

  return (
    <>
      <div className={s.operation}>
        <button
          className={costs}
          type="button"
          onClick={() => setTab('income')}
        >
          доход
        </button>
        <button
          className={profit}
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
