
var express = require('express')
var app = express()

// The code below will display 'Hello World!' to the browser when you go to http://localhost:3000
app.get('/403', (req, res) => {
    // the .status(200) isn't necessary since it is the default return status
    res.status(200).send('not sure what happened')
})

app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000')
})

module.exports = app;