import s from '../AppBar.module.scss';

const ButtonUserName = () => {
  return (
    <button
      className={s.buttonUserName}
      variant="outlined"
      type="button"
      // onClick={() => dispatch(authOperations.UserName())}
    >
      User Name
    </button>
  );
};

export default ButtonUserName;
