import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Cont from './components/Cont';

function App() {
  return (
    <div className="App">
    
     {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Cont />} />
      </Routes>
    </Router> */}
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Cont/>
      <Footer/> 
    </div>
  );
}

export default App;
