import HomePage from 'components/homepage/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import stale from './App.module.scss';
import AppBar from './components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk, currentUserTransaction } from './redux/asyncthunc';
import Router from 'constants/router';
import Dashboard from 'pages/Dashboard';
import Report from 'pages/Report';
import NotFound from 'pages/NotFound';
import { useGoogleAuth } from 'hooks/useGoogleAuth';
import axios from 'axios';

function App() {
  let navigate = useNavigate();

  const token = useSelector(state => state.auth.token);
  const isAuth = useSelector(state => state.auth.isAuth);
  const { isAuthUser } = useGoogleAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(currentThunk());
    }
  }, [dispatch, token]);

  // useEffect(() => {
  //   if (isAuth) {
  //     // dispatch(currentUserTransaction());
  //     return navigate(Router.DASHBOARD, { replace: true });
  //   } else navigate(Router.HOME, { replace: true });
  // }, [isAuth, navigate]);

  return (
    <div className={stale.App}>
      <AppBar />
      <Routes>
        <Route path={Router.HOME} element={<HomePage />} />
        <Route path={Router.DASHBOARD} element={<Dashboard />} />
        <Route path={Router.REPORT} element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
