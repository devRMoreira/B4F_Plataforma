const express = require("express")
const cors = require("cors")
const app = express()
const port = 4040

app.use(cors())
app.use(express.json())


app.patch("/api/auth/password", (req, res) => {
    const { password, confirmacaoPassword } = req.body

    let forca = 0
    let valida = false
    
    if (password !== confirmacaoPassword) {
        return res.status(400).json({ forca, valida })
    }

    if (/[A-Z]/.test(password)) {
        forca++

    } 

    if (/[a-z]/.test(password)) {
        forca++
    } 

    if (/\d/.test(password)) {
        forca++
    } 

    if (password.length >= 8) {
        forca++
    }

    if(forca >= 4){
        valida = true
    }

    return res.status(200).json({ forca, valida })
})


app.listen(port, () => console.log(`Listening http://localhost:${port}`)) 