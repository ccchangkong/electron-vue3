import { onMounted, inject } from 'vue'
import useWebStroe from '@/stroe/index.js'
const useWebSites = () => {

    const webStroe = useWebStroe()
    const { keywords } = inject('keywords');

    onMounted(() => {
        webStroe.init()
    })


    return {
        webStroe,
        keywords
    }
}
export default useWebSites