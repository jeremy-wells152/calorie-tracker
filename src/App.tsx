import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddLog from './pages/AddLog';
import CreateFood from './pages/CreateFood';
import Config from './pages/Config';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddLog />} />
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/config" element={<Config />} />
        <Route path="*" element={<NotFound />} /> {/* <-- 404 route */}
      </Routes>
    </Router>
  );
}

export default App;