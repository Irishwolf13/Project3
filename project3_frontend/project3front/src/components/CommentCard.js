import React from "react"

function CommentCard({ commentText }) {

  return(
    <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 max-h-max">
      <p>
        {commentText}
      </p>
    </div>
  )
}

export default CommentCard
