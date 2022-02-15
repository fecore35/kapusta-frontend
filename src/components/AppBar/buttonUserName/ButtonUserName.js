import s from '../AppBar.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Router from '../../../constants/router';

const ButtonUserName = () => {
  const name = useSelector(state => state.auth.name);
  return (
    <Link to={Router.DASHBOARD}>
      <button
        className={s.buttonUserName}
        variant="outlined"
        type="button"
        // onClick={() => dispatch(authOperations.UserName())}
      >
        {name}
      </button>
    </Link>
  );
};

export default ButtonUserName;
