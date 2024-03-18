import { useState } from "react"

export default function Lista({ itens }) {

    const [state, setState] = useState(itens)

    function handleClick(remover){

        setState(ps => ps.filter((ele) => ele.name !== remover))
    }

    return state ? state.map((ele, i) =>
        <div key={ele.key}>
            <h3>{ele.name}</h3>
            <p>{ele.price} €</p>
            <button onClick={() => handleClick(ele.name)}>Remover</button>

        </div>)
        : undefined
}