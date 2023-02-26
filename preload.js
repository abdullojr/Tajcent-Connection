const { contextBridge, ipcRenderer } = require("electron");

console.log("Preload is available");

contextBridge.exposeInMainWorld("api", {
  minimize: () => ipcRenderer.send("minimize"),
  maximize: () => ipcRenderer.send("maximize"),
  close: () => ipcRenderer.send("close"),
});
