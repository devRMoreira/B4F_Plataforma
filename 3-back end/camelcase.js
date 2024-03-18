const express = require('express')
const cors = require('cors')
const app = express()
const port = 4040

app.use(cors())
app.use(express.json())


app.patch("/api/strings", (req, res) => {

    const strings = req.body.strings

    if (array.length === 0) {
        return res.status(404).json(undefined)
    }

    const CamelCase = strings.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1)).join("")

    return res.status(200).json({CamelCase})
})


app.listen(port, () => console.log(`Listening http://localhost:${port}`)) 