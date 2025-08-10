import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Conclusion from './pages/Conclusion/Conclusion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Conclusion />} />
      </Routes>
    </Router>
  );
}

export default App;