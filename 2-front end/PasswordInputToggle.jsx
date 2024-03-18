import { useState } from "react"

export default function PasswordInput() {

    const [state, setState] = useState({
        pw: "",
        feedback: "",
        showPw: false

    })

    function handleChange(e) {
        const pw = e.target.value
        const feedback = getFeedback(pw)
        setState(ps => ({ ...ps, pw, feedback }))

    }

    function handleMouseDown() {
        setState(ps => ({ ...ps, showPw: false }))
    }

    function handleMouseUp() {
        setState(ps => ({ ...ps, showPw: true }))
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
        <input type={!state.showPw ? "text" : "password"} onChange={(e) => handleChange(e)} />
        <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Mostrar</button>
        {state.pw !== "" ? <p role="feedback">{state.feedback}</p> : undefined}
    </div>
}