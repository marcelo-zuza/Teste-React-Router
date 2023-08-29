
// Componente necessário para reaproveitar as rotas
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <h1>REACT ROUTER</h1>
      <Outlet />
    </div>
  )
}

export default App
