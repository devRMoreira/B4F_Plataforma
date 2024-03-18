const express = require('express')
const cors = require('cors')
const app = express()
const port = 4040

app.use(cors())
app.use(express.json())

let colecao = []


app.get("/api/colecao/:id", (req, res) => {

    const id = req.params.id

    const existe = colecao.find((ele) => ele.id === id)

    if(existe){
        return res.status(200).json(existe)
    }
     return res.status(404).json(undefined)

})

app.patch("/api/colecao/:id", (req, res) => {

    const id = req.params.id

    const novo = req.body

    const existe = colecao.findIndex((ele) => ele.id === id)

    if(existe){
        colecao[existe] = novo

        return res.status(200).json(undefined)
    } 

    return res.status(404).json(undefined)

})

app.post("/api/colecao", (req, res) => {

    const novo = req.body

    const existe = colecao.find((ele) => ele.id === novo.id)

    if(existe) {
        return res.status(409).json(undefined)
    }

    colecao.push(novo)

    return res.status(200).json(undefined)


})


app.listen(port, () => console.log(`Listening http://localhost:${port}`)) 