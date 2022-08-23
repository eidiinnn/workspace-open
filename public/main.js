const { app, BrowserWindow, ipcMain  } = require('electron')
const exec = require('child_process').exec;

app.whenReady().then(() => {
   const win = new BrowserWindow(
      {
         width: 600,
         height: 400,
         webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
         }
      }
   );

   win.loadURL('http://localhost:3000').then().catch((error) => {
      console.error(error)
   })

   ipcMain.on('commandExec', (event, data) => {
      exec('start cmd /k \"'+ data)
   })
});