import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import stale from './App.module.scss';
import AppBar from './components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from './redux/asyncthunc';
import Router from 'constants/router';
import { useGoogleAuth } from 'hooks/useGoogleAuth';
import { PublicRoute } from 'components/Routes/PublicRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import axios from 'axios';
import Spinner from 'components/Spinner/Spinner';

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
const HomePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve(
          import(
            'components/homepage/HomePage' /* webpackChunkName: 'homepage' */
          ),
        ),
      3500,
    );
  });
});
const DevelopersView = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('pages/DevelopersView/DevelopersView')),
      3500,
    );
  });
});
const Report = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('pages/Report' /* webpackChunkName: 'report' */)),
      3500,
    );
  });
});
const NotFound = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve(import('pages/NotFound' /* webpackChunkName: 'NotFound' */)),
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
          <Route
            path={Router.HOME}
            element={<PublicRoute component={HomePage} />}
          />
          <Route
            path={Router.DASHBOARD}
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path={Router.REPORT}
            element={<PrivateRoute component={Report} />}
          />
          <Route
            path={Router.DEVELOPERS}
            element={<DevelopersView component={DevelopersView} />}
          />
          <Route path="*" element={<PublicRoute component={NotFound} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
