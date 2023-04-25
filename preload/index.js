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
const getFileList = async () => {
    const filelist = await ipcRenderer.invoke('on-getfiles-event')
    return filelist
}
const openDialog = () => {
    ipcRenderer.send('on-opendialog-event')
}
const onRenderEvent = (cb) => {

    ipcRenderer.on('on-render-event', (e, msg) => {
        cb()

    })


}
contextBridge.exposeInMainWorld('myApi', {
    sendUrl,
    alert,
    open,
    getFileList,
    openDialog,
    onRenderEvent
})