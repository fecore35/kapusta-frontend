import HomePage from 'components/homepage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import stale from './App.module.scss';
import AppBar from './components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from './redux/asyncthunc';
import ModalLogOut from './components/ModalLogOut/ModalLogOut';
import Form from './components/Form/Form';
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
      <AppBar />
      <Form />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
