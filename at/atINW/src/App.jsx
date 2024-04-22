import './App.css'
import Navbar from './componentes/home/navbar.jsx'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
