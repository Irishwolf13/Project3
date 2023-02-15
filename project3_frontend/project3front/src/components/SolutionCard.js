import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"

function SolutionCard({ id, likes, solve, language, comments, problem }) {
    const [myLikes, setLikes]= useState(likes)

    let displayComments = comments.map(item =>
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
        <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 h-48">
          <div>
            <p><strong>Language:</strong>{language}</p>
            <h4>{solve}</h4>
            <button onClick={handleLike}>Click to like: ❤️ {myLikes}</button>
          </div>
        {displayComments}
        </div>
      </>
    )
}

export default SolutionCard
