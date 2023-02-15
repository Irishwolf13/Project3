import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"

function SolutionCard({ likes, solve, language, comments }) {
    const [solution, setSolution] = useState({})
    const [myLikes, setLikes]= useState(0)

    let displayComments = comments.map(item => 
      <CommentCard 
        key={item.id}
        commentText={item.comment}
      />
    )
// THIS IS WHERE YOU LEFT OFF!!!!!!!!
    return (
      <>
        <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 h-48">
          <div>
            <p><strong>Language:</strong>{language}</p>
            <h4>{solve}</h4>
            <button>like ❤️</button>
            <p> <strong>this solution has </strong>{likes}  <strong>likes</strong></p>
          </div>
        {displayComments}
        </div>
      </>
    )
}

export default SolutionCard
