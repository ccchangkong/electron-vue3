const { ipcMain, BrowserWindow } = require('electron')
const { default: WinState } = require('electron-win-state')
const path = require('path')
const saveas = require('./saveas')
// const { WInState } = require('electron-win-state')
const cssText = `width: 6em;height: 30px;background-color: cornflowerblue;border-radius: 5px;text-align: center;line-height: 30px;position: fixed;bottom: 50px;right: 20px;z-index: 1000;color: #fff;cursor: pointer;`
const js = `
    const btn =document.createElement('button')
    btn.id='c_button'
    btn.innerHTML='关闭窗口'
    btn.style.cssText='${cssText}'
    btn.addEventListener('click',()=>{myApi.close()})
    document.body.appendChild(btn)
`
let win = null
ipcMain.handle('on-open-event', (e, url) => {
    const winState = new WinState({
        defaultWidth: 1200,
        defaultHeight: 800,
        electronStoreOptions: {
            name: 'window-state-open'
        }
    })

    win = new BrowserWindow({
        ...winState.winOptions,
        show: false,
        webPreferences: {
            preload: path.resolve(__dirname, '../preload/open.js')
        }
    })
    win.on('ready-to-show', () => {
        win.show()
    })
    win.loadURL(url)
    win.webContents.openDevTools()
    winState.manage(win)
    win.webContents.executeJavaScript(js).then(() => {

    }).catch(() => {

    })
    win.webContents.on('context-menu', (e, args) => {
        saveas(args.srcURL)
    })
})
ipcMain.handle('on-close-event', (e) => {
    win.close()
})