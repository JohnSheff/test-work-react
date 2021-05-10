import {makeAutoObservable} from "mobx"


class mobxServicesDetails {
    listServicesDetails = []
    mesError = ""
    loadingDetails = true

    constructor() {
        makeAutoObservable(this)
    }

    fetchSomeDateDetails(id) {
        fetch(`http://localhost:7070/api/services/${id}`)
            .then(data => {
                this.loadingDetails = true
                return data.json()
            })
            .then(res => {
                this.mesError = ""
                this.loadingDetails = false
                this.listServicesDetails = res
            }).catch((err) => {
            this.loadingDetails = true
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