import{defineStore} from 'pinia'
const useWebStroe=defineStore('websiteStroe',{
    state(){
        return{
            websites:[]
        }
    },
    actions:{
        add(item){
            this.websites.push(item)
            console.log(item)
        }
    }
})