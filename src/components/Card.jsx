export default function Card({card, index}){
    return (<>
        <li key={index}  className="card">
            <h3>
                {card.title}
            </h3>
                <div className="marker">
                    <i className="el-icon-arrow-right"></i>
                    <div className="title">{card.title}</div>
                </div>
        </li>
    </>)
}