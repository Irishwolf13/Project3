import React, {useState, useEffect} from "react"
import ProblemCard from "./ProblemCard"
import CommentCard from "./CommentCard"
import SolutionCard from "./SolutionCard"
import SubmitSolve from './SubmitSolve';

function MainSpace() {
  const [problem, setProblem] = useState({})
  useEffect(() => {
    fetch("http://localhost:9292/problems/1")
    .then(res => res.json())
    .then(problemData => {
      setProblem(problemData)
  })
  }, [])
  console.log(problem)
    return(
        <div className="mx-auto w-4/6 mt-6">
            <ProblemCard />
            <SubmitSolve/>
            <SolutionCard/>
            <CommentCard/>
        </div>
    )
}

export default MainSpace
