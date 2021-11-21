const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
require('@electron/remote/main').initialize()

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1024,
		height: 728,
		minWidth: 600,
		minHeight: 300,
		frame: true,
		webPreferences: {
			enableRemoteModule: true,
			devTools: isDev,
			nodeIntegration: true,
			contextIsolation: false
		}
	})

	mainWindow.maximize();

	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	)
}

app.on('ready', () => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0)
			createWindow();
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
