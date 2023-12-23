const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
    res.send('Welcome to Express!')
}
)

app.listen(port, ()=> {console.log('listening on port 5500')}
)