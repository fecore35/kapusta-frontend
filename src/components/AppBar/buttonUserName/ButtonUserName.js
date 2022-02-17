import s from '../AppBar.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Router from '../../../constants/router';

const ButtonUserName = () => {
  const name = useSelector(state => state.auth.name);
  const reg = /\w+\s/g;
  let newName = name.match(reg);
  return (
    <Link to={Router.DASHBOARD}>
      <button
        className={s.buttonUserName}
        variant="outlined"
        type="button"
        // onClick={() => dispatch(authOperations.UserName())}
      >
        {newName}
      </button>
    </Link>
  );
};

export default ButtonUserName;
