import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Layout/Header';
import Side from './pages/Layout/Side';
import Footer from './pages/Layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Github from './pages/Github';

const Interface = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LocalContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <>
        <Interface>
          <Header />
          <LocalContainer>
            <Side />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" element={<Github />} />
            </Routes>
          </LocalContainer>
          <Footer />
        </Interface>
      </>
    </Router>
  );
}

export default App;
