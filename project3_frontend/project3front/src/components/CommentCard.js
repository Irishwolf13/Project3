import React from "react"

function CommentCard({ commentText }) {
  return(
    <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 h-48">
      <h3><strong>Comment:</strong></h3>
      {commentText}
    </div>
  )
}

export default CommentCard
