import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogCreate from './pages/LogCreate';
import FoodCreate from './pages/FoodCreate';
import FoodList from './pages/FoodList';
import FoodSearch from './pages/FoodSearch';
import Config from './pages/Config';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogCreate />} />
        <Route path="/food-create" element={<FoodCreate />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/food-search" element={<FoodSearch />} />
        <Route path="/config" element={<Config />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;