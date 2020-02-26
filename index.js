const express = require('express')
const app = express()
const port = 3000

app.use(express.static('assets'))
app.listen(port, () => console.log(`Map tiles being server on ${port}!`))
