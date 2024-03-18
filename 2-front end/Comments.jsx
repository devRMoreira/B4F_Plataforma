import { useState } from "react"

export default function Comments({ user, comments }) {

    const [state, setState] = useState("")

    function handleChange(e){
        setState(e.target.value)
    }

    function handleSubmit(){
        const newComment = {
            postedBy: user.username,
            text: state,
            date: new Date()
        }
    }

    return <div>
        {comments.map((ele) => <div>
            <p>Por: {ele.postedBy}</p>
            <p>Em: {String(ele.date)}</p>
            <p>{ele.text}</p>
        </div>)}

        <form role="form">
            <input type="text" onChange={(e) => handleChange(e)}></input>
            <button type="submit"></button>

        </form>
    </div>

}