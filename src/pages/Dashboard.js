import { useState } from 'react';
import { Link } from 'react-router-dom';
import Router from '../constants/router';

function Dashboard() {
  const [tab, setTab] = useState('income');

  return (
    <>
      <h2>Dashboard</h2>
      <Link to={Router.REPORT}>Перейти к отчетам</Link>

      <div>
        <button type="button" onClick={() => setTab('income')}>
          доход
        </button>
        <button type="button" onClick={() => setTab('consumption')}>
          расход
        </button>
      </div>

      {tab === 'income' ? <>доход</> : <>расход</>}
    </>
  );
}

export default Dashboard;
