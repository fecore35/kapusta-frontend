import s from '../AppBar.module.scss';
import { useDispatch } from "react-redux";
import {logOutThunk} from '../../../redux/asyncthunc';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={s.buttonLogout}
      variant="outlined"
      type="button"
      onClick={() => dispatch(logOutThunk())}
    >
      Выйти
    </button>
  );
      }

export default ButtonLogOut;
