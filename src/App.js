import HomePage from 'components/homepage/HomePage';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import stale from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from './redux/asyncthunc';
import { Costs } from 'components/Costs/Costs';
import { Profit } from 'components/Profit/Profit';
import { UserPage } from '../src/pages/UserPage/UserPage.js';

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

        <Route path="/userPage/*" element={<UserPage />}>
          <Route path="costs" element={<Costs />} />

          <Route path="profit" element={<Profit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
