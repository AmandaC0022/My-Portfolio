import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage/Homepage'; 
import About from './pages/About/About'; 
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume'; 
import Contact from './pages/Contact/Contact'; 

// COMPONENTS
import Footer from './components/Footer/Footer'; 
import Navbar from './components/Navbar/Navbar';

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
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
