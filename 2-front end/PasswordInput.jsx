import { useState } from "react"

export default function PasswordInput() {

    const [state, setState] = useState({
        pw: "",
        feedback: ""
    })

    function handleChange(e) {
        const pw = e.target.value
        const feedback = getFeedback(pw)
        setState(ps => ({ ...ps, pw, feedback }))

    }

    function getFeedback(pw) {
        if (pw.length > 10) {
            return "Password Forte"
        } else if (pw.length > 6) {
            return "Password Média"
        } else {
            return "Password Fraca"
        }
    }

    return <div>
        <input type="password" onChange={(e) => handleChange(e)} />
        {state.pw !== "" ? <p role="feedback">{state.feedback}</p> : undefined}
    </div>
}