import { useState } from 'react'
import './App.css'
import '../src/assets/css/custom.css'
import '../src/assets/css/responsive.css';
import HomePage from './Pages/HomePage/HomePage';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <HomePage/> 

    </>
  )
}

export default App
