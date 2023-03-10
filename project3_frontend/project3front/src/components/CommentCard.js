import React from "react"
import CustomButton from "./CustomButton"
import delete_icon from "../assets/delete-icon.png"
import commenter_icon from "../assets/commenter-icon.png"

function CommentCard({ commentText, onDelete, id }) {

    const handleDelete = () => {
      onDelete(id)
    }

  return(
    <div className="relative right-10">
      <div className="window-outer w-4/6 my-2">
        <div className="title-bar">
          <img src={commenter_icon} alt="navbar icon" className="inline-block px-1 h-5"/>
          <h1 className="inline-block pl-2">Anonymous Comment</h1>
          <div className="relative inline-block float-right h-6 w-6 top-1 right-1 group">
            <CustomButton buttonImage={delete_icon} clickEvent={handleDelete}/>
            <span className="comment-tooltip group-hover:scale-100">Delete comment</span>
          </div>  
        </div>
        <div className="window-inner-with-bar">
          <p className="whitespace-pre-wrap break-words">
            {commentText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
