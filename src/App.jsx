import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Conclusion from './pages/Conclusion/Conclusion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/formulario-saute" element={<Home />} />
        <Route path="/finish" element={<Conclusion />} />
      </Routes>
    </Router>
  );
}

export default App;