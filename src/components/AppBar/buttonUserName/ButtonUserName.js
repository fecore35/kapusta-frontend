import s from '../AppBar.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Router from '../../../constants/router';

const reg = /\w+\s/g;

const ButtonUserName = () => {
  const userName = useSelector(state => state.auth.name);
  let newName = userName.split(' ').length > 1 ? userName.match(reg) : userName;

  return (
    <Link to={Router.DASHBOARD}>
      <button className={s.buttonUserName} variant="outlined" type="button">
        {newName}
      </button>
    </Link>
  );
};

export default ButtonUserName;
