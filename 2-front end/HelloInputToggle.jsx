import { useState } from "react"

export default function HelloInputToggle() {

    const [state, setState] = useState({
        texto: "",
        display: true
    })

    function handleChange(e) {

        setState(ps => ({ ...ps, texto: e.target.value }))
    }

    function handleClick() {
        setState(ps => ({ ...ps, display: false }))
    }

    return <div>

        <input type="text" onChange={(e) => handleChange(e)}></input>

        {state.display ? <button onClick={handleClick}>Apresentar</button> 
        : <p>Hello, {state.texto}!</p>}

    </div>
}