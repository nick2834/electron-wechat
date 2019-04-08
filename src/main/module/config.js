const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV !== 'development') {
    global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

const loginURL = NODE_ENV === 'development' ? 'http://localhost:9080' : 'file://${__dirname}/index.html';
const mainURL = NODE_ENV === 'development' ? `http://localhost:9080/#main/home` :`file://${__dirname}/index.html#main/home`;
const webviewURL = NODE_ENV === 'development' ?`http://localhost:9080/#webview` :`file://${__dirname}/index.html#webview`;

export {
    loginURL,mainURL,webviewURL
}

