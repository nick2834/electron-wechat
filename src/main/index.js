import {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
} from 'electron';
let loginWindow, mainWindow, webviewWindow;
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let devUrl = `http://localhost:9080`;
let proUrl = `file://${__dirname}/index.html`;
const loginURL = process.env.NODE_ENV === 'development' ? devUrl : proUrl;
const mainURL = process.env.NODE_ENV === 'development' ?
  `${devUrl}/#main/home` :
  `${proUrl}#main/home`;
const webviewURL = process.env.NODE_ENV === 'development' ?
  `${devUrl}/#webview` :
  `${proUrl}#webview`;

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    height: 400,
    useContentSize: true,
    width: 300,
    titleBarStyle: 'hidden',
    resizable: false,
    frame: false,
    maximizable: false,
    webPreferences: {
      webSecurity: false
    }
  })

  loginWindow.loadURL(loginURL)

  loginWindow.on('closed', () => {
    loginWindow = null
  })
  // Create the Application's main menu
  var template = [{
    label: "Application",
    submenu: [{
        label: "关于",
        selector: "orderFrontStandardAboutPanel:"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click: function () {
          app.quit();
        }
      }
    ]
  }, {
    label: "Edit",
    submenu: [{
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        selector: "undo:"
      },
      {
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        selector: "cut:"
      },
      {
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        selector: "paste:"
      },
      {
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        selector: "selectAll:"
      }
    ]
  }];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    height: 710,
    useContentSize: true,
    width: 980,
    show: true,
    titleBarStyle: 'hidden',
    resizable: false,
    maximizable: false,
    webPreferences: {
      webSecurity: false
    }
  })
  mainWindow.loadURL(mainURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  // Create the Application's main menu
  var template = [{
    label: "Application",
    submenu: [{
        label: "About Application",
        selector: "orderFrontStandardAboutPanel:"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click: function () {
          app.quit();
        }
      }
    ]
  }, {
    label: "Edit",
    submenu: [{
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        selector: "undo:"
      },
      {
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        selector: "cut:"
      },
      {
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        selector: "paste:"
      },
      {
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        selector: "selectAll:"
      }
    ]
  }];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
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