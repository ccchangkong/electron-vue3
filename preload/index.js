const { contextBridge, ipcRenderer } = require("electron")
const sendUrl = async (url) => {
    //  console.log(url)   
    let result = await ipcRenderer.invoke('on-url-event', url)
    return result
    // console.log(rersult)
}
contextBridge.exposeInMainWorld('myApi', {
    sendUrl
})