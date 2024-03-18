import { useState } from "react"

export default function DataInput() {


    const [state, setState] = useState({
        display: false,
        day: 0,
        month: 0,
        year: 0
    })

    function handleClick() {
        setState(ps => ({ ...ps, display: !ps.display }))
    }

    function handleChange(e) {
        const date = new Date(e.target.value)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        setState(ps => ({ ...ps, day, month, year }))
    }



    return <div>
        <h3>Insere a tua data de nascimento.</h3>

        {state.display ? <div role="content">
            <p>Nasceste no dia {state.day} do {state.month} de {state.year}</p>
            <button onClick={handleClick}>Alterar</button>
        </div>
            : <div role="content">
                <input type="date" onChange={(e) => handleChange(e)} />
                <button onClick={handleClick}>Mostrar</button>
            </div>}

    </div>
}