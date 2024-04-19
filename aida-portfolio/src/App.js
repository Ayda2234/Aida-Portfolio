import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  </Router>
  );
}
export default App;
