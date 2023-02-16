import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"
import CustomButton from "./CustomButton"
import like_image from "../assets/like-button.png"
import SubmitComment from "./SubmitComment"

function SolutionCard({ id, likes, solve, language, comments, problem }) {
  const [myLikes, setLikes]= useState(likes)
  const [myComments, setMyComments] = useState([])

  useEffect(() => {
    setMyComments(comments)
  }, [])

  const addComment = (newComment) => {
    setMyComments([...comments, newComment])
  }

  let displayComments = myComments.map(item =>
    <CommentCard
      key={item.id}
      commentText={item.comment}
    />
  )

  const handleLike = (e) => {
    fetch(`http://localhost:9292/solutions/${id}/likes`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({num_of_likes: myLikes+1})
    })
    .then(setLikes(prev => prev+1))
  }

  return (
    <>
      <div className="mx-auto w-4/6">
        <div className="window-outer w-5/6">
          <div className="title-bar">
            <p className="inline-block pl-2">Solution #{id}</p>
            <div className="relative float-right top-1 right-1">
              <CustomButton buttonImage={like_image} onClick={handleLike}/>
            </div>
          </div>
          <div className="window-inner-with-bar">
            <p className="font-win95bold">Language: {language}</p>
            <h4 className="font-win95">{solve}</h4>
            <p className="font-win95bold"> This solution has {myLikes} likes</p>
          </div>
        </div>
        {displayComments}
        <SubmitComment id={id} addComment={addComment} />
      </div>
    </>
  )
}

export default SolutionCard
