import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Confirmacao from './pages/Confirmacao/Confirmacao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/formulario-saute" element={<Home />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </Router>
  );
}

export default App;