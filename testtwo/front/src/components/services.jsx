import React from 'react';
import {Link} from "react-router-dom";
import meServices from "../mobxStore/serviceStore"
import {observer} from "mobx-react-lite"
import image from "../pic/B13CC99F-A588-40A3-BAB3-EDF25B140F3D.png"

meServices.fetchSomeDate()
const Services = observer(() => {
    return (
        <div>
            {meServices.loading && !meServices.mesError ?
                <>
                    <img src={image} alt="loading"/>
                </>
                :
                null
            }
            {!meServices.mesError ? meServices.listServices.map(item =>
                <ul key={item.id}>
                    <Link to={`${item.id}/details`}> {item.name}</Link>
                    <span> {item.price}</span>
                </ul>
            ) : <div className='error'>
                <p className="errorMessage">Произошла ошибка!</p>
                <button className="btn btn-secondary errorButton" onClick={() => {
                    meServices.retryDate()
                }}> Повторить запрос
                </button>
            </div>}
        </div>
    );
})
export default Services;