import {
    app,
    BrowserWindow,
    Menu,
} from 'electron';
import {mainURL} from './config'
let mainWindow = null

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

export {
    mainWindow,
    createMainWindow
}