import React from "react"
import problem_image from "../assets/problem-icon.png"

function ProblemCard({onLangChange, problem}) {

    return (
        <div className="window-outer">
            <div className="title-bar">
                <img src={problem_image} alt="navbar icon" className="inline-block px-1 h-5"/>
                <p className="inline-block pl-2">
                    Today's problem
                </p>
            </div>
            <div className="relative w-full left-1.5 h-fit">
                <div className="window-inner-with-bar h-56">
                    <div className="problem-card">
                        <p> <strong>Difficulty: </strong>{problem.difficulty}</p>
                        <h4 className="question">{problem.question}</h4>
                    </div>
                </div>
                <div className="relative inline-block font-win95 border-t-black border-l-black border-b-white border-r-white border-2 border-solid px-1 bottom-0.5 my-0.5 bg-gray-300">
                    <label for="solution-language">Problem Language: </label> 
                    <select name="solution-language" id="solution-language" onChange={onLangChange}>
                        <option value="All">All</option>
                        <option value="Javascript">JavaScript</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                    </select>
                </div>
            </div>
        </div>
    )

}

export default ProblemCard
