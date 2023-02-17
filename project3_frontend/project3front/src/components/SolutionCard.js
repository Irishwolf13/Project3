import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"
import CustomButton from "./CustomButton"
import SubmitComment from "./SubmitComment"
import comment_image from "../assets/comment-icon.png"
import like_image from "../assets/like-button.png"

function SolutionCard({ id, likes, solve, language, comments, problem }) {
  const [myLikes, setLikes]= useState(likes)
  const [myComments, setMyComments] = useState([])
  const [commentInput, setCommentInput] = useState(false)

  useEffect(() => {
    setMyComments(comments)
  }, [])

  const addComment = (newComment) => {
    setMyComments([...comments, newComment])
  }

  function onDelete(id) {
  const deletionFilter = myComments.filter(myComment => myComment.id !== id)

  fetch(`http://localhost:9292/comments/${id}`, {
     method: "DELETE",
     headers: {
      "Content-Type": "application/json"
     }
  })
  .then(res => res.json())
  .then(setMyComments(deletionFilter))
  }

  let displayComments = myComments.map(item =>
    <CommentCard
      key={item.id}
      id={item.id}
      commentText={item.comment}
      onDelete={onDelete}
    />
  )

  const handleLike = (e) => {
    fetch(`http://localhost:9292/solutions/${id}/likes`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({num_of_likes: myLikes+1})
    })
    .then(setLikes(prev => prev+1))
  }

  function handleCommentInput() {
    setCommentInput(!commentInput)
  }

  return (
    <>
      <div className="mx-auto w-5/6">
        <div className="window-outer w-5/6">
          <div className="title-bar">
            <p className="inline-block pl-2">Solution #{id}</p>
            <div className="relative float-right top-1 right-1">
              <p className="inline-block pr-2 font-win95bold">{myLikes} likes</p>
              <div className="relative inline-block h-6 w-6 group">
                <CustomButton buttonImage={like_image} clickEvent={handleLike}/>
                <span className="comment-tooltip group-hover:scale-100">Add like</span>
              </div>
            </div>
          </div>
          <div className="window-inner-with-bar">
            <p className="font-win95bold">Language: {language}</p>
            <h4 className="font-win95 whitespace-pre-wrap break-words">{solve}</h4>
          </div>
        </div>
        <div className="relative inline-block -mr-12  h-12 w-12 float-left left-[92%] bottom-12 group">
          <CustomButton buttonImage={comment_image} clickEvent={handleCommentInput}/>
          <span className="comment-tooltip group-hover:scale-100">Add comment</span>
        </div>
        <div className="relative w-5/6">
          {displayComments}
          {commentInput ? <SubmitComment id={id} addComment={addComment} /> : null}
        </div>
      </div>
    </>
  )
}

export default SolutionCard
