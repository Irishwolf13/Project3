import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"
import CustomButton from "./CustomButton"
import like_image from "../assets/like-button.png"

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
        <div className="mx-auto w-4/6">
          <div className="solution-card-outer">
            <div className="absolute inline-block bg-[#0000a8] w-[99%] h-8 top-1">
              <p className="inline-block font-win95bold text-white pl-1">Placeholder Name</p>
              <div className="relative float-right top-1 right-1">
                <CustomButton buttonImage={like_image} onClick={handleLike}/>
              </div>
            </div>
            <div className="solution-card-inner">
              <p className="font-win95bold">Language: {language}</p>
              <h4 className="font-win95">{solve}</h4>
              <p className="font-win95bold"> This solution has {myLikes} likes</p>
            </div>
          </div>
          {displayComments}
        </div>
      </>
    )
}

export default SolutionCard
