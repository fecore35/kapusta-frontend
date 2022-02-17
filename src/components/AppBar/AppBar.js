/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../icons/logoKapusta.svg';
import groupV from '../../icons/userActiv.svg';
import vector1 from '../../icons/logoKapusta.svg';
import ButtonUserName from './buttonUserName/ButtonUserName';
import ButtonLogOut from './buttonLogOut/ButtonLogOut';
import s from './AppBar.module.scss';

const AppBar = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <div className={s.container}>
      <header className={s.header}>
        <img
          // className={s.header__image}
          src={logo}
          alt="Logo"
          width="90"
          height="31"
          className={s.logo}
        />

        <NavLink to="/developers" className={s.team}>
          <h1>𝐓𝐞𝐚𝐦𝐬</h1>
        </NavLink>

        {isAuth && (
          <div className={s.user__item}>
            <img src={groupV} alt="group42" width="32" className={s.groupV} />

            {/* <img src={vector1} alt="vector1" width="32" className={s.vector1} /> */}

            {/* <Navigation /> */}
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            <ButtonUserName className={s.buttonUserName} />
            <img
              src={vector1}
              alt="vector1"
              width="32"
              className={s.vector1 + ' ' + s.vector__mobile}
            />
            <ButtonLogOut className={s.buttonLogout} />
          </div>
        )}
      </header>
    </div>
  );
};

export default AppBar;
