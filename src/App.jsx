
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
      </div>
      <Outlet></Outlet>

    </>
  )
}

export default App
