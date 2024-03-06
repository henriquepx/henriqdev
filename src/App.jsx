import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Layout/Header'
import Side from './pages/Layout/Side'
import Footer from './pages/Layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Github from './pages/Github'

function App() {
  return (
    <Router>
      <>
        <div className='interface'>
          <Header />
          <div className='local'>
            <Side />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" element={<Github />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
