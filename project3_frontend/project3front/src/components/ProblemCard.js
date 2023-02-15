import React, {useState, useEffect} from "react"

function ProblemCard() {
    const [problem, setProblem] = useState({})

    // useEffect(() => {
    //   fetch("http://localhost:9292/problems")
    //   .then(res => res.json())
    //   .then(problemData => {
    //     let randomIdx = Math.floor(Math.random() * problemData.length)
    //     setProblem(problemData[randomIdx])
    // })
    // }, [])

    useEffect(() => {
          fetch("http://localhost:9292/problems/1")
          .then(res => res.json())
          .then(problemData => {
            setProblem(problemData)
        })
        }, [])
            // console.log(problem)

    return (
        <div className="mx-auto bg-slate-300 w-5/6 h-96 border-2 border-solid border-black">
            {/* <h1 className="font-win95">main space</h1> */}
            <div className="problem-card">
                <p> <strong>Difficulty:</strong> {problem.difficulty}</p>
            <h4 className="question">{problem.question}</h4>
            </div>
        </div>

    )

}

export default ProblemCard
