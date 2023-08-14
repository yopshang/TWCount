import CountHall from '../components/CountHall.jsx'
import {Menu} from 'element-react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function index(){
    // const login_icon = <FontAwesomeIcon icon="fab fa-odnoklassniki" />

    const onSelect = (index)=>{
        console.log('選擇的索引項目', index)
    }

    return (
        <>
            <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect}>
                <Menu.Item index="1">大台灣計算平台</Menu.Item>
                <Menu.Item index="2">目前計算工具</Menu.Item>
            </Menu>
            <CountHall></CountHall>
        </>
    )
    }