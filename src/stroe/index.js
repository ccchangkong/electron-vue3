import { defineStore } from 'pinia'
import store from 'store2'
import _ from 'lodash'
const useWebStroe = defineStore('websiteStroe', {
    state() {
        return {
            websites: []
        }
    },
    getters: {
        find() {
            return (keywords) => {
                if (keywords == "") {
                    return this.websites
                } else {
                    return _.filter(this.websites, (item) => {
                        let partten = new RegExp(keywords, 'i')
                        return partten.test(item.title)
                    })
                }

            }
        }
    },
    actions: {
        add(item) {
            if (~this.websites.findIndex(el => el.url == item.url)) {
                myApi.alert("此网站已添加")
            } else {
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