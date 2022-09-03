const net = require('net')
const tools = require('./extern')
const express = require('express')
const app = express()

let conns = []

// Web Server
app.get('/', (req, res) => {
    let command = req.query?.Command
    let value = req.query?.Value

    if(command && value)
        if(command === "SET_HIGH")
            conns[0].write("Command: SET_HIGH " + value)
        if(command === "SET_LOW")
            conns[0].write("Command: SET_LOW " + value)
    res.send("Command sent")
})


app.listen(8080, () => {
    console.log("Web server started on 8080") })

// ESP Server
const ESPport = 3000 || process.env.PORT
let ESPserver = net.createServer()

ESPserver.on('connection', (sock) => {
    conns.push(sock)
    sock.setTimeout(60 * 1000)

    let remoteAddr = tools.cleanIP(sock.remoteAddress)
    console.log(remoteAddr + " | Connected")

    sock.on('data', (data) => {
        let text = data.toString()
    })

    sock.on('error', (err) => {
        console.log("Socket error: " + err.message)
    })

    sock.on('timeout',() => {
        const index = conns.indexOf(sock)
        conns.splice(index, 1)
        sock.destroy(new Error("Socket timeout"))
        console.log(remoteAddr + " | Disconnected | Reason: Socket timeout")
    })

}).listen(ESPport)

// TODO make git repo

console.log(`ESP Server started on port ${ESPport}`)