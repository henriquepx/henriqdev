import './App.css'
import Header from './pages/Header'
import Side from './pages/Side'
import Main from './pages/Main'

function App() {

  return (
    <>
      <Header />
      <div className='local'>
        <Side />
        <Main />
      </div>
    </>
  )
}

export default App
