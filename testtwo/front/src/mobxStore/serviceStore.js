import {configure, makeAutoObservable} from "mobx"

configure({
    enforceActions: "never",
})

class mobxServices {
    listServices = []
    mesError = ""
    loading = true

    constructor() {
        makeAutoObservable(this)
    }

    fetchSomeData() {
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

    retryData() {
        if (this.mesError) {
            this.mesError = ""
            this.fetchSomeData()
        }
    }
}

export default new mobxServices()