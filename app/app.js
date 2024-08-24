//inisialisasi port socket
const socket = io("ws://localhost:8080");

//mengirim message
socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  document.querySelector("#messages").appendChild(el);
  document.querySelector("#messageContainer").classList.remove("hidden");
});

//membuat fungsional send button
document.querySelector("#sendButton").onclick = () => {
  const text = document.querySelector("#OrderNotes").value;
  if (text.trim() !== "") {
    socket.emit("message", text);
    document.querySelector("#OrderNotes").value = "";
  }
};

//fungsional clearbutton
document.querySelector("#clearButton").onclick = () => {
  document.querySelector("#OrderNotes").value = "";
};
