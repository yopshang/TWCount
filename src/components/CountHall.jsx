import PersonalSetWorth from '../page/PersonalSetWorth'
import Testpage1 from '../page/TestPage1'
import Testpage2  from '../page/Testpage2'
import Card from './Card'
import {useState} from 'react';
import { Link, Route, Routes} from 'react-router-dom'

export default function CountHall() {
    const [cards, setCards] = useState([
        { title: '個人淨值計算機',path:'/', component: PersonalSetWorth, key: 'PersonalSetWorth' },
        { title: '測試計算機1', path: '/about', component: Testpage1, key: 'about' },
        { title: '測試計算機2', path: '/contact', component: Testpage2, key: 'contact' },
      ])
    
  // 元件的內容
  return (<div className="container">
    <ul className="card_container d-flex flex-wrap list--no justify-start p-10">
        {
             cards.map((card, index)=>{
                return (
                    <Link to={card.path} key={card.key} className="card_link">
                        <Card card={card} index={index}></Card>
                    </Link>
                )
            })
        }
        <Routes>
            {
                cards.map((card, index)=>{
                    return (
                        <Route
                            key={index}
                            path={card.path}
                            element={card.component}
                        >

                        </Route>
                    )
                })
            }
        </Routes>
    </ul>
  </div>);
};

