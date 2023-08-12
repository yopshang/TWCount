import Index from './page/Index'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import 'element-theme-default';
import './style/main.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index></Index>
    </>
  )
}

export default App
