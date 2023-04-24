const { contextBridge, ipcRenderer } = require("electron")
const sendUrl = async (url) => {
    //  console.log(url)   
    let result = await ipcRenderer.invoke('on-url-event', url)
    return result
    // console.log(rersult)
}
const alert = (msg) => {
    ipcRenderer.invoke('on-alert-event', msg)
}
const open = (url) => {
    ipcRenderer.invoke('on-open-event', url)
}

contextBridge.exposeInMainWorld('myApi', {
    sendUrl,
    alert,
    open
})