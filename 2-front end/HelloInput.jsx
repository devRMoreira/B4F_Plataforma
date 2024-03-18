import { useState } from "react"

export default function HelloInput() {

    const [state, setState] = useState("")

    function handleChange(e){

        setState(e.target.value)
    }

    return <div>
        <input type="text" onChange={(e) => handleChange(e)}></input>
        <p>Hello, {state?? undefined}!</p>
    </div>
}