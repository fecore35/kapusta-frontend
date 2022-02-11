import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Header.module.scss';
import logo from '../../components/homepage/images/Header/logo.svg';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <nav>
      {!isLoggedIn && (<Link className={s.link} to="/">
        <svg className={s.logo}>
          <use href={`${logo}#icon-logo`}></use>
        </svg>
      </Link>)}
      {isLoggedIn && (
        <Link className={s.link} to="/income">
          <svg className={s.auth_logo}>
            <use href={`${logo}#icon-logo`}></use>
          </svg>
        </Link>
      )}
    </nav>
  )
}

export default Navigation
