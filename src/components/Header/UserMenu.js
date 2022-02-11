import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import operations from '../../redux/auth/auth-operation';
import authSelectors from '../../redux/auth/auth-selectors';
import logout from '../homepage/images/Header/logout.svg';
import s from './Header.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogOut = () => dispatch(operations.logOut());

  const userName = useSelector(authSelectors.getUsername);
  const avatar = () => userName.charAt(0);

  return (
    <div className={s.user_container}>
      <div className={s.avatar}>{avatar}</div>
      <p className={s.name}>{userName}</p>
      <Link onClick={onLogOut} className={s.logout} to="/">
        Выйти
      </Link>
      <Link onClick={onLogOut} className={s.logout_mobile} to="/">
        <svg className={s.logout_icon}>
          <use href={`${logout}#icon-logout`}></use>
        </svg>
      </Link>
    </div>
  )
}

export default UserMenu;
