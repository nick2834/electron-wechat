import {
    app,
    BrowserWindow,
    Menu,
  } from 'electron';
  import {loginURL} from './config'
  let loginWindow = null
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

  export {
    loginWindow,createLoginWindow
  }