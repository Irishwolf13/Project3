import React, {useState, useEffect} from "react"
import CommentCard from "./CommentCard"

function SolutionCard() {
    const [solution, setSolution] = useState({})
    const [likes, setLikes]= useState(0)


    const handleLikes = (e) => {
        // fetch request for update
        setLikes(likes + 1)
    }

    useEffect(() => {
        fetch("http://localhost:9292/problems/1")
        .then(res => res.json())
        .then(solutionData => {
            solutionData.solutions.map(sol => {
             setSolution(sol)
            })
      })
      }, [])
      console.log(solution)
 {/* if code is'nt showing up the username is the reason delete it */}


    return (
        <>
        <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 h-48">
        {/* <h1>solution</h1> */}
        <div>
        {/* <p>{solution.user.user_name}'s solution:</p> */}
        <p><strong>Language:</strong> {solution.language} </p>
        <h4>{solution.solve}</h4>
        <button onClick={handleLikes}>like ❤️</button>
         <p> <strong>this solution has </strong>{likes}  <strong>likes</strong></p>
        </div>

        <div className="solution-comments">
        <h2>Solution Comments:</h2>

        <div className="comment-section">
            {<CommentCard/>}
        </div>
        </div>


        </div>
        </>
    )
}

export default SolutionCard
