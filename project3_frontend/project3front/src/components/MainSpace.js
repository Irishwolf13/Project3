import React, {useState, useEffect} from "react"
import ProblemCard from "./ProblemCard"
import CommentCard from "./CommentCard"
import SolutionCard from "./SolutionCard"
import SubmitSolve from './SubmitSolve';

function MainSpace() {
  const [problem, setProblem] = useState({})
  const [solutions, setSolutions] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/problems/1")
    .then(res => res.json())
    .then(problemData => {
      setProblem(problemData)
      setSolutions(problemData.solutions)
  })
  }, [])

  let sortSolutions = solutions.sort((a, b) => b.num_of_likes - a.num_of_likes)
  let displaySolutions = sortSolutions.map(solution =>
      <SolutionCard
        key={solution.id}
        id={solution.id}
        likes={solution.num_of_likes}
        solve={solution.solve}
        language={solution.language}
        comments={solution.comments}
        problem={ problem }
      />
    )

    return(
        <div className="mx-auto w-4/6 mt-6">
            <ProblemCard />
            <SubmitSolve problem={ problem }/>
            {displaySolutions}
            <CommentCard/>
        </div>
    )
}

export default MainSpace
