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
import { PublicRoute } from '../src/components/Routes/PublicRoute'
import { PrivateRoute } from '../src/components/Routes/PrivateRoute'
import axios from 'axios';
import Spinner from 'components/Spinner/Spinner';
// const Dashboard = lazy(() =>
//   import('pages/Dashboard' /* webpackChunkName: 'dashboard-pages' */),
// );
const Dashboard = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve(
          import('pages/Dashboard' /* webpackChunkName: 'dashboard-pages' */),
        ),
      3500,
    );
  });
});

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
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={Router.HOME} element={<PublicRoute component={HomePage} />} />
          <Route path={Router.DASHBOARD} element={<PrivateRoute component={Dashboard} />} />
          <Route path={Router.REPORT} element={<PrivateRoute component={Report} />} />
          <Route path="*" element={<PublicRoute component={NotFound} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
