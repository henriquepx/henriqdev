import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Layout/Header';
import Side from './pages/Layout/Side';
import Footer from './pages/Layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Interface = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  opacity: ${props => props.loaded ? '1' : '0'};
  animation: ${fadeIn} 2s ease;
`;

const LocalContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;

function App() {

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false); 
    };
    fetchData();
  }, []); 

  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  return (
    <Router>
      {loading ? <Preloader /> :
        <Interface loaded={loaded ? "true" : "false"}>
          <>
            <Header />
            <LocalContainer>
              <Side />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </LocalContainer>
            <Footer />
          </>
        </Interface>
      }
    </Router>
  );
}

export default App;
