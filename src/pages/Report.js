import { Link } from 'react-router-dom';
import CategoryList from 'components/CategoryList/CategoryList';
import Schedule from 'components/homepage/schedule/Shedule';
import Router from '../constants/router';

function Report() {
  return (
    <div className="container">
      <h2>Report</h2>
      <Link to={Router.DASHBOARD}>Вернуться на главную</Link>
      <CategoryList />
      <Schedule />
    </div>
  );
}
export default Report;
