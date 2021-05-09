import {makeAutoObservable} from "mobx"

class mobxServices {
    listServices = []
    mesError = ""

    constructor() {
        makeAutoObservable(this)
    }

    fetchSomeDate() {
        fetch("http://localhost:7070/api/services")
            .then(data => data.json())
            .then(res => {
                this.mesError = ""
                this.listServices = res;
            }).catch((err) => {
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