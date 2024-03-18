import { useState } from "react"

function Checkbox({ initialState }) {

    const [state, setState] = useState(initialState)

    function handleClick(){
        setState(ps => !ps)
    }

    return (
        <div>
            <button onClick={handleClick}> {state ? "Ativo" : "Inativo"}</button>
        </div>
    )
}

export default Checkbox