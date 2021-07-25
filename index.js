const express = require('express')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const dir = process.env.TILE_DIR || 'assets'

app.use(cors(dir))

app.use(express.static(dir))
app.listen(port, () => console.log(`Map tiles being served on ${port} from ${dir}!`))
