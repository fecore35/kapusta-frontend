import HomePage from 'components/homepage/HomePage';
import { Route, Routes } from 'react-router-dom';
import stale from './App.module.scss';

function App() {
  return (
    <div className={stale.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
