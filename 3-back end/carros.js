const express = require('express')
const cors = require('cors')
const app = express()
const port = 4040

app.use(cors())
app.use(express.json())


app.get("/api/carros/:marca", (req, res) => {
    const marca = req.params.marca

    if (marca == "mercedes") {
        res.status(200).json({ existe: true })
    }

    if (marca == "audi") {
        res.status(200).json({ existe: true })
    }

    res.status(404).json({ existe: false })

})


app.listen(port, () => console.log(`Listening http://localhost:${port}`)) 