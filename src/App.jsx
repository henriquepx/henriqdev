import './App.css'
import Header from './pages/Layout/Header'
import Side from './pages/Layout/Side'
import Main from './pages/Main'
import Footer from './pages/Layout/Footer'
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='interface'>
        <Header />
        <div className='local'>
          <Side setActiveIndex={setActiveIndex} />
          <Main activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
