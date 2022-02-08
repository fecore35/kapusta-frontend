import { Link } from 'react-router-dom';
import Router from '../constants/router';

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <Link to={Router.REPORT}>Перейти к отчетам</Link>
    </>
  );
}

export default Dashboard;
