import HomePage from 'components/homepage/HomePage';
import { Route, Routes } from 'react-router-dom';
import stale from './App.module.scss';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <div className={stale.App}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
