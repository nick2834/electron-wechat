import {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
} from 'electron';
import {loginWindow,createLoginWindow} from './module/login'
import {mainWindow,createMainWindow} from './module/main'
let webviewWindow;
function createWebviewWindow(url) {
  webviewWindow = new BrowserWindow({
    height: 855,
    useContentSize: true,
    width: 380,
    resizable:false,
    maximizable: false
  })
  webviewWindow.loadURL(url)
  
  webviewWindow.on('closed', () => {
    webviewWindow = null
  })
}

app.on('ready', () => {
  createLoginWindow()
  createMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (loginWindow === null && mainWindow === null) {
    createLoginWindow()
    createMainWindow()
  }
})

ipcMain.on('webClose', () => {
  webviewWindow.on('closed', () => {
    webviewWindow = null
  })
})
ipcMain.on('web-view', (e, data) => {
  if(webviewWindow){
    webviewWindow.on('closed', () => {
      webviewWindow = null
    })
    createWebviewWindow(data.detailurl)
  }else{
    createWebviewWindow(data.detailurl)
  }
})