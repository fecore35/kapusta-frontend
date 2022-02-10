import CategoryList from 'components/CategoryList/CategoryList';
import { Link } from 'react-router-dom';
import Router from '../constants/router';

function Report() {
  return (
    <>
      <h2>Report</h2>
      <Link to={Router.DASHBOARD}>Вернуться на главную</Link>
      <CategoryList />
    </>
  );
}

export default Report;
