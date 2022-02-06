import HomePage from 'components/homepage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import stale from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from './redux/asyncthunc';

function App() {
  const token = useSelector(state => state.auth.token);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentThunk());
    }
  }, [token]);

  return (
    <div className={stale.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
