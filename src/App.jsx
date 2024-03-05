import './App.css'
import Header from './pages/Layout/Header'
import Side from './pages/Layout/Side'
import Footer from './pages/Layout/Footer'
import Home from './pages/Home'

function App() {


  return (
    <>
      <div className='interface'>
        <Header />
        <div className='local'>
          <Side />
          <Home />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
