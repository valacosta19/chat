const socket = io()

const send = document.getElementById("send-message")
const allMessages = document.getElementById("all-messages")

send.addEventListener("click", () => {
  const message = document.getElementById("message")

  socket.emit("message", message.value)

  message.value = ""
})

socket.on("message", ({user, message}) => {
  const msg = document.createRange().createContextualFragment(`
    <div>
      <div>
        <img  alt="image" />
      </div>

      <div>
        <div>
          <span>${user}</span>
          <span>A second ago</span>
        </div>

        <p>${message}</p>
      </div>
    </div>
  `)

  allMessages.append(msg)
})