import HomePage from 'components/homepage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import stale from './App.module.scss';
import AppBar from './components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from './redux/asyncthunc';
import Router from 'constants/router';
import Dashboard from 'pages/Dashboard';
import Report from 'pages/Report';
import NotFound from 'pages/NotFound';
import queryString from 'query-string';
import { createBrowserHistory } from 'history';

function App() {
  const token = useSelector(state => state.auth.token);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentThunk());
    }
  }, [token]);

  const history = createBrowserHistory();
  const { user, newToken } = queryString.parse(history.location.search);
  console.log(user, newToken);

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
