import electron from 'electron'
const { app } = electron
const { BrowserWindow } = electron
import path from 'path'

let win: any

function createWindow () {
    win = new BrowserWindow({width: 1300, height: 800, icon: path.join(__dirname, './assets/laftel.ico')})
    win.loadURL(`file://${__dirname}/index.html`)
    win.setMenuBarVisibility(false)

    // win.webContents.openDevTools() // Open DevTool

    win.on('closed', () => { // when the window close
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
