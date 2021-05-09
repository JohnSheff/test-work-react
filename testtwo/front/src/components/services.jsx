import React from 'react';
import {Link} from "react-router-dom";
import meServices from "../mobxStore/serviceStore"
import {observer} from "mobx-react-lite"

meServices.fetchSomeDate()
const Services = observer(() => {

        return (
            <div>
                {!meServices.mesError ? meServices.listServices.map(item =>
                    <ul key={item.id}>
                        <Link to={`${item.id}/details`}> {item.name}</Link>
                        <span> {item.price}</span>
                    </ul>
                ) : <div className='error'>
                    <p className="errorMessage">Произошла ошибка</p>
                    <button  className="btn btn-secondary" onClick={() => {
                        meServices.retryDate()
                    }}> Повторить запрос
                    </button>
                </div>}
            </div>
        );
    }
)
export default Services;