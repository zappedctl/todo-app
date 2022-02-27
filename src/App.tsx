import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
