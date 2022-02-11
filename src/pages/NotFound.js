import { Link } from 'react-router-dom';
import Router from '../constants/router';

function NotFound() {
  return (
    <>
      <h2>404</h2>
      <Link to={Router.DASHBOARD}>Вернуться на главную</Link>
    </>
  );
}

export default NotFound;
