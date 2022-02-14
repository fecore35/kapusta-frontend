import HomePage from 'components/homepage/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import stale from './App.module.scss';
import AppBar from './components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk, currentUserTransaction } from './redux/asyncthunc';
import Router from 'constants/router';
import Report from 'pages/Report';
import NotFound from 'pages/NotFound';
import { useGoogleAuth } from 'hooks/useGoogleAuth';
import axios from 'axios';
const Dashboard = lazy(() =>
  import('pages/Dashboard' /* webpackChunkName: 'dashboard-pages' */),
);

function App() {
  const token = useSelector(state => state.auth.token);
  const { isAuthUser } = useGoogleAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(currentThunk());
    }
  }, [dispatch, token]);

  return (
    <div className={stale.App}>
      <AppBar />
      <Suspense fallback={<h1>Loading </h1>}>
        <Routes>
          <Route path={Router.HOME} element={<HomePage />} />
          <Route path={Router.DASHBOARD} element={<Dashboard />} />
          <Route path={Router.REPORT} element={<Report />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
