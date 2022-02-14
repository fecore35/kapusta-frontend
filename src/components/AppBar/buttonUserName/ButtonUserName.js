import s from '../AppBar.module.scss';
import { useSelector } from 'react-redux';

const ButtonUserName = () => {
  const name = useSelector(state => state.auth.name);
  return (
    <button
      className={s.buttonUserName}
      variant="outlined"
      type="button"
      // onClick={() => dispatch(authOperations.UserName())}
    >
      {name}
    </button>
  );
};

export default ButtonUserName;
