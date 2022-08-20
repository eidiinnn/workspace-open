const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
   const win = new BrowserWindow(
      {
         width: 600,
         height: 400,
         webPreferences: {
            nodeIntegration: true
          }
      }
   );

   win.loadURL('http://localhost:3000').then().catch((error) => {
      console.error(error)
   })
   win.webContents.openDevTools()
});