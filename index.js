const app = require('express')()

app.get('/teste', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/teste-atualizado', (req, res) => {
    res.send('Caaaaara! Atualizei o aplicação!')
})

app.listen('3333', () => {
    console.log('Server running in por 3333...')
})