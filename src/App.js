import './App.css';
import AskOut from './components/AskHerOut';
import Yes from './components/Yes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<AskOut />} />
          <Route path="/yes" element={<Yes/>} />
      </Routes>
  </Router>
  );
}

export default App;
