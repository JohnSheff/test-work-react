import {observer} from "mobx-react-lite"
import mobxServicesDetails from "../mobxStore/serviceDetailStore"
import {useParams} from "react-router";
import React from 'react';
import {useEffectOnce} from "react-use";
import image from "../pic/B13CC99F-A588-40A3-BAB3-EDF25B140F3D.png"

const ServiceDetails = observer(() => {

    const {id} = useParams()

    useEffectOnce(() => {
        mobxServicesDetails.fetchSomeDataDetails(id)
    })

    return (
        <div>
            {
                mobxServicesDetails.loadingDetails && !mobxServicesDetails.mesError ?
                    <>
                        <img src={image} alt="loading"/>
                    </>
                    :
                    null
            }
            {!mobxServicesDetails.mesError ?
                <div>
                    <h2>Название: {mobxServicesDetails.listServicesDetails.name}</h2>
                    <h3>Подробнее: {mobxServicesDetails.listServicesDetails.content}</h3>
                    <h3>Цена: {mobxServicesDetails.listServicesDetails.price}</h3>
                </div> :
                <div className='error'>
                    <p className="errorMessage">Произошла ошибка!</p>
                    <button className="btn btn-secondary errorButton" onClick={() => {
                        mobxServicesDetails.retryDataDetails(id)
                    }}> Повторить запрос
                    </button>
                </div>}
        </div>
    );
})


export default ServiceDetails;
