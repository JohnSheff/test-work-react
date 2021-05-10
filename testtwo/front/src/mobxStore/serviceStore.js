import {makeAutoObservable} from "mobx"

class mobxServices {
    listServices = []
    mesError = ""
    loading = true

    constructor() {
        makeAutoObservable(this)
    }

    fetchSomeDate() {
        fetch("http://localhost:7070/api/services")
            .then(data => {
                this.loading = true
                return data.json()
            })
            .then(res => {
                this.mesError = ""
                this.listServices = res;
                this.loading = false

            }).catch((err) => {
            this.loading = true
            this.mesError = err.message
        });
    }

    retryDate() {
        if (this.mesError) {
            this.mesError = ""
            this.fetchSomeDate()
        }
    }
}

export default new mobxServices()