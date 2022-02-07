import s from '../AppBar.module.scss';

const ButtonLogOut = () => {
  return (
    <button
      className={s.buttonLogout}
      variant="outlined"
      type="button"
    // onClick={() => dispatch(authOperations.logOut())}
    >
      Выйти <
    </button>
  );
};

export default ButtonLogOut;
