const app = require('express')()

app.get('/teste', (req, res) => {
    res.send('Caaaaaara! Estou no AWS maluco!')
})

app.listen('3333', () => {
    console.log('Server running in por 3333...')
})