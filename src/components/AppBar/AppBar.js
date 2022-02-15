/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import logo from '../../icons/logoKapusta.svg';
import groupV from '../../icons/Group 42.png';
import vector1 from '../../icons/logo.png';
import ButtonUserName from './buttonUserName/ButtonUserName';
import ButtonLogOut from './buttonLogOut/ButtonLogOut';
import s from './AppBar.module.scss';

const AppBar = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <header className={s.header}>
      <a href="/">
        <img src={logo} alt="Logo" width="90" height="31" className={s.logo} />
      </a>
      {isAuth && (
        <>
          <img src={groupV} alt="group42" width="32" className={s.groupV} />

          <img src={vector1} alt="vector1" width="32" className={s.vector1} />

          {/* <Navigation /> */}
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          <ButtonUserName className={s.buttonUserName} />
          <img src={vector1} alt="vector1" width="32" className={s.vector1} />
          <ButtonLogOut className={s.buttonLogout} />
        </>
      )}
    </header>
  );
};

export default AppBar;
