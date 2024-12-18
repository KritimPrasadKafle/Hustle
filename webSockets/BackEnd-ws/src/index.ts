import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8081 });

//event handler
wss.on("connection", function (socket) {
  // console.log("user connected");
  // setInterval(() => {
  //   socket.send("Current Price of solana is " + Math.random());
  // }, 500);

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("Pong");
    }
  });
});
