// import Index from './page/Index.jsx'

import { useState } from 'react'
// import { Layout } from 'element-react'
import './style/main.scss'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import CountHall from './components/CountHall.jsx'
import {Menu} from 'element-react'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const onSelect = (index)=>{
    console.log('選擇的索引項目', index)
}

  return (
    <>
      <div className="grid-content bg-purple-dark" style={{width:'100vw'}}>
      <BrowserRouter> 
      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect}>
                <Menu.Item index="1">大台灣計算平台</Menu.Item>
                <Menu.Item index="2">目前計算工具</Menu.Item>
            </Menu>
            <CountHall></CountHall>
            <Outlet></Outlet>
      </BrowserRouter> 
      </div>
    </>
  )
}

export default App
