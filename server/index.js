//membuat server
const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

//membuka koneksi jika ada yg memasuki sisi klien
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

//memberitahu port
http.listen(8080, () => console.log("listening on http://localhost:8080"));
