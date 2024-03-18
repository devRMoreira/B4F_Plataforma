import { useState } from "react";

export default function Contador() {
    const [state, setState] = useState(0)

    function handleIncrement() {
        setState(ps => ps += 1)
    }

    function handleDecrement() {
        setState(ps => ps -= 1)

    }

    return <div role="main">
        <p> {state} </p>

        <button onClick={handleIncrement}>+</button>
        {state <= 0 ?
            <button onClick={handleDecrement} disabled>-</button>

            : <button onClick={handleDecrement} >-</button>}


    </div>
}