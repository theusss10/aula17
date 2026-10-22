const express = require('express')
const app = express()
const axios = require('axios')

app.set('view engine', 'ejs')

const PORT = 3000

app.use(express.urlencoded({ extended: true }))

const API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/mensagem', async (req, res) => {

    try {
        const response = await axios.get(API_URL)

        console.log(response.data)

        const mensagem = response.data[0]

        res.render('message', {
            msg: mensagem
        })

    } catch (error) {
        console.error(error.message)
        res.send('Erro ao acessar a API.')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})