import './App.css'
import Header from './pages/Header'
import Side from './pages/Side'
import Main from './pages/Main'
import Footer from './pages/Footer'

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
