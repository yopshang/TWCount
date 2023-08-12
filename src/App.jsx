import Index from './page/Index.jsx'

import { useState } from 'react'
import { Layout } from 'element-react'
import './style/main.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout.Row>
        <Layout.Col span="24">
          <div className="grid-content bg-purple-dark">
            <Index></Index>
          </div>
        </Layout.Col>
      </Layout.Row>
    </>
  )
}

export default App
