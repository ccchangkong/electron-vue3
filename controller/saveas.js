const { Menu, dialog } = require('electron')
const got = require('got').default
const path = require('path')
const imageType = require('image-type')
const randomstring = require('randomstring')
const fs = require('fs')
// import { got } from 'got'
const saveas = (srcUrl) => {
    if (srcUrl) {
        const contentMenu = Menu.buildFromTemplate([
            {
                label: '图片另存为...',
                click: () => {
                    got.get(srcUrl).then(async (res) => {

                        const chunk = Buffer.from(res.rawBody)
                        const imgType = imageType(chunk)
                        const { filePath, canceled } = await dialog.showSaveDialog({
                            title: "图片另存为",
                            defaultPath: path.resolve(__dirname, '../public/upload/' + randomstring.generate(10) + '.' + imgType.ext)
                        })
                        if (!canceled) {
                            fs.writeFileSync(filePath, chunk)
                        }
                    }).catch(e => { })
                },
                accelerator: 'CommandOrControl+S'

            }
        ])
        contentMenu.popup()
    }
}
module.exports = saveas