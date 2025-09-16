import './App.css'
import Header from './components/header'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
