import {
    BrowserWindow
} from 'electron'

const webviewURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080/#webview` :
    `file://${__dirname}/index.html#webview`
export let webviewWindow;
export function createWebviewWindow() {
    webviewWindow = new BrowserWindow({
        height: 855,
        useContentSize: true,
        width: 380,
        frame: false,
        resizable: false,
        skipTaskbar: false,
        show: false,
        center: true
    })
    webviewWindow.loadURL(webviewURL)

    webviewWindow.on('closed', () => {
        webviewWindow = null
    })
}