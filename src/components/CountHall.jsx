import {useState} from 'react';

export default function CountHall() {
    const [cards, setCards] = useState([
        {title: '個人淨值計算機'},
        {title: '測試計算機1'},
        {title: '測試計算機1'},
        {title: '測試計算機1'},
        {title: '測試計算機1'},
        {title: '測試計算機1'},
        {title: '測試計算機1'},
    ])
  // 元件的內容
  return (<div className="container">
    <ul className="card_container d-flex flex-wrap list--no justify-start p-10">
        {
            cards.map((card, index)=>{
                return (<li key={index}  className="card">{card.title}
                    <div className="marker">
                        <i className="el-icon-arrow-right"></i>
                        <div className="title">{card.title}</div>
                    </div>
                </li>)
            })
        }
    </ul>
  </div>);
};

