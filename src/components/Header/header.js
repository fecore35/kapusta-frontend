import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/asyncthunc';

export default function Header() {
  const isAuth = useSelector(state => state.auth.isAuth);
  const userName = useSelector(state => state.auth.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutThunk());
  };

  return (
    <header>
      <div>
        <span>Kapu$ta</span>
      </div>
      {isAuth && (
        <div>
          <span>{userName}</span>

          <a onClick={handleClick} href="#">
            Выйти
          </a>
        </div>
      )}
    </header>
  );
}
