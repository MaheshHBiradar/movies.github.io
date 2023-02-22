
import './App.css';
import Home from './component/Home';
import Movies from './component/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />

        </Routes>
      </Router>
      </>
      );
}

      export default App;
