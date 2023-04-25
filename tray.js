const { Tray } = require('electron')
function cerateTray(app, win) {
    const tray = new Tray('icon.png')
    tray.setToolTip('readit')
    tray.on('click', (e) => {
        if (e.shiftKey) {
            app.quit()
        }
    })
}

module.exports = cerateTray