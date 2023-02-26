const { app, Menu, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Tajcent Connection",
    minWidth: 800,
    minHeight: 600,
    frame: false,
    autoHideMenuBar: true,

    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  mainWindow.loadFile(path.join(__dirname, "public/index.html"));

  const MenuTemplate = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(MenuTemplate);
}

const menu = [];

app.whenReady().then(() => {
  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("maximize", () => {
    mainWindow.maximize();
  });

  ipcMain.on("close", () => {
    mainWindow.close();
  });
  createWindow();
});
