/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../icons/logoKapusta.svg';
import vector1 from '../../icons/logoKapusta.svg';
import ButtonUserName from './buttonUserName/ButtonUserName';
import ButtonLogOut from './buttonLogOut/ButtonLogOut';
import s from './AppBar.module.scss';

import Router from 'constants/router';

const AppBar = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const name = useSelector(state => state.auth.name);
  let symbolName = name && name[0].toUpperCase();

  return (
    <div className={s.container}>
      <header className={s.header}>
        <img src={logo} alt="Logo" width="90" height="31" className={s.logo} />

        <NavLink to={Router.DEVELOPERS} className={s.team}>
          <h1>𝐓𝐞𝐚𝐦𝐬</h1>
        </NavLink>

        {isAuth && (
          <div className={s.user__item}>
            <div className={s.user__symbol}>
              <Link to={Router.DASHBOARD}>
                <p>{symbolName}</p>
              </Link>
            </div>
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
