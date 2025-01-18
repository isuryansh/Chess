"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager/GameManager");
const ws = new ws_1.WebSocketServer({ port: 3000 });
const gamemanager = new GameManager_1.GameManager();
ws.on("connection", function connection(ws) {
    gamemanager.addUser(ws);
    ws.on("disconnect", () => gamemanager.removeUser(ws));
    //   ws.on("message", function message(data) {
    //     console.log("recived %s", data);
    //   });
    //   ws.send("Hii from backend");
});
