
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require("socket.io")(http)
const PORT = process.env.PORT || 5000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// socket connections
io.on('connection' , (socket) => {

    socket.on('message' , (msg) => {

        socket.broadcast.emit('message' ,msg)
    })
})