'use strict'

const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const PDFWindow = require('electron-pdf-window')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1000
    })
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '/app/index.html'),
      protocol: 'file:',
      slashes: true
    }))
    mainWindow.webContents.openDevTools()
})

ipcMain.on('open-lesson', (lesson) => {
  var lesson = new PDFWindow({width: 800, height: 600});
  lesson.loadURL('file://' + __dirname + '/content/' + lesson);
});
