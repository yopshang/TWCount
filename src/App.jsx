import Index from './page/Index.jsx'

import { useState } from 'react'
import { Layout } from 'element-react'
import './style/main.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid-content bg-purple-dark" style={{width:'100vw'}}>
        <Index></Index>
      </div>
    </>
  )
}

export default App
