import Index from './page/Index.jsx'

import { useState } from 'react'
import { Layout } from 'element-react'
import './style/main.scss'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid-content bg-purple-dark" style={{width:'100vw'}}>
      <BrowserRouter> 
        <Index></Index>
      </BrowserRouter> 
      </div>
    </>
  )
}

export default App
