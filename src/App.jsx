import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Navbar from './components/NavBar'
import Header from './components/Header'
import About_Service from './components/About_Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About_Service />
    </div>
  )
}

export default App
