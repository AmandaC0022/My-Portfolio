import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage'; 
import About from './pages/About'; 
import Projects from './pages/Projects';
import Resume from './pages/Resume'; 

// COMPONENTS
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="body">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
