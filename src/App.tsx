import './App.css';
import Hero from './components/Hero/Hero';
import GlobalMain from './components/GlobalMain/GlobalMain';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Robots from './Robots';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Undefined from './components/UndefinedPage/Undefined';

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Hero />
              <GlobalMain />
              <Footer />
            </>} />
          <Route path="/robots.txt" element={<Robots />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
