'use strict'

const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const PDFWindow = require('electron-pdf-window')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 550,
        width: 1000,
        autoHideMenuBar: true
    })
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '/app/index.html'),
      protocol: 'file:',
      slashes: true
    }))
    // mainWindow.webContents.openDevTools()
})
app.on('window-all-closed', () => app.quit())

ipcMain.on('open-lesson', (e, lesson) => {
  const lessonWindow = new PDFWindow({width: 800, height: 600});
  lessonWindow.loadURL('file://' + __dirname + '/content/' + lesson);
});
