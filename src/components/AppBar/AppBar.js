/* eslint-disable no-unused-vars */
// import { useSelector } from 'react-redux';
import s from './AppBar.module.css';
import logo from '../../icons/logo.png';
import groupV from '../../icons/Group 42.png';
// import Button from '@material-ui/core/Button';
import vector1 from '../../icons/logo.png';
import logOut from '../../icons/logOut.png';

export default function AppBar() {
  //   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" width="90" height="31" className={s.logo} />
      <img src={groupV} alt="group42" width="32" className={s.groupV} />

      <button
        className={s.buttonUserName}
        variant="outlined"
        type="button"
        // onClick={() => dispatch(authOperations.UserName())}
      >
        User Name
      </button>

      <img src={vector1} alt="vector1" width="32" className={s.vector1} />
      {/* <Navigation /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}

      <button
        className={s.buttonLogout}
        variant="outlined"
        type="button"
        // onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>

      <button className={s.logOut}>
        <img src={logOut} alt="logOut" width="12" />
      </button>
    </header>
  );
}
