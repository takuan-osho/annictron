"use strict";

import app = require("app");
import BrowserWindow = require("browser-window");

require("crash-reporter").start();

var mainWindow: GitHubElectron.BrowserWindow = null;

app.on("window-all-closed", () => {
	if (process.platform != "darwin") {
		app.quit();
	}
});

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	mainWindow.loadURL("file://" + __dirname + "/src/index.html");

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
});