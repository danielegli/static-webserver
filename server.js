const express = require('express')
const app = express()

// This serves all content found in the public directory when the client asks for it
app.use(express.static('public'))

// Default page to send if client didn't ask for anything specific
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/index.html' )
})

// Run the server on port 8080 and write out the message that it's running
app.listen(8080, () => console.log('Simple webserver running at http://localhost:8080!'))