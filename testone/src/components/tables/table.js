import React from 'react';
import '../styles/table.css'

export default function App({someData}) {

    const [list, setList] = React.useState()
    React.useEffect(() => {
        someData()
            .then((res) => {
                setList(res)
            });
    })

    return (
        <div className="tablo">
            {list ? list.map((item, index) => (
                <div key={index} className='someBox'>
                    <h3 className='someHeader'>{item.header}</h3>
                    <ul className="someList">
                        {item.options.map((elem, index) => (
                            <li key={index}>{elem}</li>
                        ))}
                    </ul>
                    <span className="someText">{item.text}</span>
                </div>
            )) : <>
                <h2>Ожидания загрузки json</h2>
            </>}
        </div>
    )
}

