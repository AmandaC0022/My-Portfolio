import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="body">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            {/* <Route path="/projects" element={<Projects/>}/> */}
            <Route path="/about" element={<AboutMe/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
