import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager/GameManager";

const ws = new WebSocketServer({ port: 3000 });
const gamemanager = new GameManager();

ws.on("connection", function connection(ws) {
  gamemanager.addUser(ws);
  ws.on("disconnect", () => gamemanager.removeUser(ws));

  //   ws.on("message", function message(data) {
  //     console.log("recived %s", data);
  //   });

  //   ws.send("Hii from backend");
});
