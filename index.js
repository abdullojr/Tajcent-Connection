const { app, Menu, BrowserWindow, Notification } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: "Tajcent Connection",
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "public/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}
app.whenReady().then(() => createWindow());
