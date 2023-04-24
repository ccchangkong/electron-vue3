// import {app,BrowserWindow}from "electron"
const { app, BrowserWindow, Menu } = require("electron")

const path = require('path')

require('./controller/getSource')
require('./controller/alert')

const createWindow = () => {
    Menu.setApplicationMenu(null)
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // menuBarVisible :true
        // frame:false,//无边框
        webPreferences: {
            preload: path.join(__dirname, 'preload/index.js'),
            // nodeIntegration:true,//渲染教程允许使用node
            // contextIsolation:false,//取消隔离
        },
    })
    win.loadURL(' http://localhost:5173/')
    win.webContents.openDevTools()
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})