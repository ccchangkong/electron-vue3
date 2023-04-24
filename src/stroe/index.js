import { defineStore } from 'pinia'
import store from 'store2'
import _, { times } from 'lodash'
const useWebStroe = defineStore('websiteStroe', {
    state() {
        return {
            websites: []
        }
    },
    actions: {
        add(item) {
            if (!~this.websites.findIndex(el => el.url == item.url)) {
                this.websites.unshift(item)
                store('websites', this.websites)
                console.log(item)
            }

        },
        init() {
            this.websites = store.get('websites') || []
        },
        deleteItem(url) {
            _.remove(this.websites, (item) => item.url == url)
            store('websites', this.websites)
        }
    }
})
export default useWebStroe