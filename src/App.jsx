import './App.css'
import Header from './pages/Layout/Header'
import Side from './pages/Layout/Side'
import Main from './pages/Main'
import Footer from './pages/Layout/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='local'>
        <Side />
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
