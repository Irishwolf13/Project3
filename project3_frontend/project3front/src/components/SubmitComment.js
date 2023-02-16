import React, {useState} from "react"


function SubmitComment({id, addComment}) {
    const [newComment, setComment] = useState("")

    function handleNewComment(e) {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/comments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: newComment,
                solution_id:id,
                user_id:1
            })
        })
        .then(res => res.json())
        .then(res => addComment(res))

        setComment("")
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
           <input type="text" name="comment" placeholder="enter comment..." value={newComment} onChange={handleNewComment}/>
            <button type="submit">Leave Comment</button>
           </form>
        </div>
    )
}


export default SubmitComment
