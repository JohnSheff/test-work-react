import React from 'react';
import {useParams} from "react-router";

const ServiceDetails = () => {
    const {id} = useParams()
    const [detailsItem, setDetailsItem] = React.useState()
    React.useEffect(() => {

        fetch(`http://localhost:7070/api/services/${id}`)
            .then(data => data.json())
            .then(res => {
                setDetailsItem(res);
            })

        hangError()
    }, [detailsItem, id])

  const  hangError = () => {
        console.log("ошибка")
    }
    return (
        <div>
            {detailsItem ? <div>
                    <h2>Название: {detailsItem.name}</h2>
                    <h3>Подробнее: {detailsItem.content}</h3>
                    <h3>Цена: {detailsItem.price}</h3>
                </div> :
                <div>
                    <button onClick={hangError}> Повторить запрос</button>
                </div>}
        </div>
    );
}
;

export default ServiceDetails;