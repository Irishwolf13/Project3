import React, {useState, useEffect} from "react"
import ProblemCard from "./ProblemCard"
import CommentCard from "./CommentCard"
import SolutionCard from "./SolutionCard"
import SubmitSolve from './SubmitSolve';
import SubmitComment from "./SubmitComment";

function MainSpace({problem_ID}) {
  const [problem, setProblem] = useState({})
  const [solutions, setSolutions] = useState([])
  const [langChange, setLangChange] = useState("All")

  useEffect(() => {
    fetch(`http://localhost:9292/problems/${problem_ID}`)
    .then(res => res.json())
    .then(problemData => {
      setProblem(problemData)
      setSolutions(problemData.solutions)
  })
  }, [])
  // solution language selector functions
  function handleLangChange(e) {
    setLangChange(e.target.value)
  }

  const solutionsFilter = solutions.filter(sol => {
    if(langChange === "All") return true;
    return sol.language === langChange;
  })

  let sortSolutions = solutionsFilter.sort((a, b) => b.num_of_likes - a.num_of_likes)
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

  const helperRefresh = (newItem) => {
    setSolutions([...solutions, newItem])
  }

  return(
    <div className="mx-auto mt-20 w-4/6 ">
      <ProblemCard problem={problem} onLangChange={handleLangChange}/>
      <SubmitSolve problem={ problem } helperRefresh={helperRefresh}/>
      {displaySolutions}
    </div>
  )
}

export default MainSpace
