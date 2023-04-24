import { defineStore } from 'pinia'
import store from 'store2'
const useWebStroe = defineStore('websiteStroe', {
    state() {
        return {
            websites: []
        }
    },
    actions: {
        add(item) {
            this.websites.unshift(item)
            store('websites', this.websites)
            console.log(item)
        },
        init() {
            this.websites = store.get('websites') || []
        }
    }
})
export default useWebStroe