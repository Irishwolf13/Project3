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
        <div className="window-outer w-4/6 m-6">
            <form onSubmit={handleSubmit} className="relative w-full left-0.5">
                <div className="window-inner-no-bar my-0 h-24">
                    <textarea placeholder="Enter comment..." value={newComment} onChange={handleNewComment}
                    className="w-full h-full break-words"/>
                </div>
                <button type="submit" className="comment-button">Leave Comment</button>
            </form>
        </div>
    )
}


export default SubmitComment
