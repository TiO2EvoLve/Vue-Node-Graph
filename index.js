import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url' // 用于获取 __dirname

// 替代 __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url))

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:5173')
        win.webContents.openDevTools()
    } else {
        // 修复生产环境路径问题
        const indexPath = path.join(__dirname, 'dist', 'index.html')
        console.log('Loading file:', indexPath)
        win.loadFile(indexPath)
        
        // 可选：打开开发者工具来调试
        // win.webContents.openDevTools()
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})