import './App.css'
import Header from './pages/Layout/Header'
import Side from './pages/Layout/Side'
import Main from './pages/Main'
import Footer from './pages/Layout/Footer'

function App() {

  return (
    <>
      <div className='interface'>
        <Header />
        <div className='local'>
          <Side />
          <Main />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
