const express = require('express')
const cors = require('cors')
const app = express()
const port = 4040

app.use(cors())
app.use(express.json())

const livros =  [
    {
        "id": "lusiadas",
        "nome": "Os Lusíadas",
        "ano": 1572,
        "author": "Luís Vaz de Camões"
    },
    {
        "id": "maias",
        "nome": "Os Maias",
        "ano": 1888,
        "author": "Eça de Queiroz"
    },
    {
        "id": "desassossego",
        "nome": "O Livro do Desassossego",
        "ano": 1982,
        "author": "Bernardo Soares (Fernando Pessoa)"
    },
    {
        "id": "mensagem",
        "nome": "Mensagem",
        "ano": 1934,
        "author": "Fernando Pessoa"
    }
]

app.patch("/api/livros/:id", (req, res) => {

    const id = req.params.id

    const livro = livros.find((ele) => ele.id === id)

    if(livro){
        return res.status(200).json({livro: livros[livro]})
    } else {
        return res.status(404).json(undefined)
    }


})


app.listen(port, () => console.log(`Listening http://localhost:${port}`)) 