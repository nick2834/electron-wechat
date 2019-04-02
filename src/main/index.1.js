import {
  app,
  ipcMain,
} from 'electron';
import {
  loginWindow,
  createLoginWindow
} from './module/login';
import {
  mainWindow,
  createMainWindow
} from './module/mainWindow';
import {
  webviewWindow,
  createWebviewWindow
} from './module/webView';
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

app.on('ready', () => {
  createLoginWindow()
  createMainWindow()
  createWebviewWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (loginWindow === null && mainWindow === null && webviewWindow === null) {
    createLoginWindow()
    createMainWindow()
    createWebviewWindow()
  }
})

ipcMain.on('webClose', () => {

  webviewWindow.close()
})
ipcMain.on('web-view', (e, data) => {
  
  if (webviewWindow == null) {
    console.error(data)
    createWebviewWindow();
    webviewWindow.show();
    setTimeout(() => {
      webviewWindow.webContents.send('WebViewData', data)
    }, 0);
  }else{
    webviewWindow.show();
    webviewWindow.webContents.send('WebViewData', data)
  }
  
})