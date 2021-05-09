import {observer} from "mobx-react-lite"
import mobxServicesDetails from "../mobxStore/serviceDetailStore"
import {useParams} from "react-router";
import React from 'react';
import {useEffectOnce} from "react-use";

const ServiceDetails = observer(() => {

    const {id} = useParams()

    useEffectOnce(() => {
        mobxServicesDetails.fetchSomeDateDetails(id)
    })

    return (
        <div>
            {!mobxServicesDetails.mesError ?
                <div>
                    <h2>Название: {mobxServicesDetails.listServicesDetails.name}</h2>
                    <h3>Подробнее: {mobxServicesDetails.listServicesDetails.content}</h3>
                    <h3>Цена: {mobxServicesDetails.listServicesDetails.price}</h3>
                </div> :
                <div className='error'>
                    <p className="errorMessage">Произошла ошибка</p>
                    <button  className="btn btn-secondary" onClick={() => {
                        mobxServicesDetails.retryDateDetails(id)
                    }}> Повторить запрос
                    </button>
                </div>}
        </div>
    );
})


export default ServiceDetails;
