const { ipcMain, BrowserWindow } = require("electron")

const getSource = (url) => {
    return new Promise((resolve,reject)=>{
        const win = new BrowserWindow({
            width: 500,
            height: 500,
            show: false,
            webPreferences: {
                offscreen: true
            }
        })
        win.loadURL(url)
        win.webContents.on('did-finish-load', async () => {
            const title = win.getTitle()
            // console.log(title)
            try {
                const img = await win.webContents.capturePage()
                const imgUrl=img.toDataURL()
                resolve({
                    title,
                    imgUrl,
                    url
                })
    
            } catch (error) {
                reject(error)
            }
    
        })
        
    })

}
ipcMain.handle('on-url-event', async(e, url) => {
    const result=await getSource(url)
    return result
})