import React from "react"

function CommentCard({ commentText, onDelete, id }) {

    const handleDelete = () => {
      onDelete(id)
    }

  return(
    <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 max-h-max">
      <button onClick={handleDelete}>Report Comment</button>
      <p>
        {commentText}
      </p>
    </div>
  )
}

export default CommentCard
