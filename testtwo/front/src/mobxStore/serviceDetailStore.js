import {makeAutoObservable} from "mobx"


class mobxServicesDetails {
    listServicesDetails = []
    mesError = ""

    constructor() {
        makeAutoObservable(this)
    }

    fetchSomeDateDetails(id) {
        fetch(`http://localhost:7070/api/services/${id}`)
            .then(data => data.json())
            .then(res => {
                this.listServicesDetails = res
            }).catch((err) => {
            this.mesError = err.message
        });
    }

    retryDateDetails(id) {
        if (this.mesError) {
            this.mesError = ""
            this.fetchSomeDateDetails(id)
        }
    }
}

export default new mobxServicesDetails()