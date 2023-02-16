function ProblemCard({onLangChange, problem}) {

    return (
        <div className="mx-auto bg-slate-300 w-5/6 h-96 border-2 border-solid border-black">
            {/* <h1 className="font-win95">main space</h1> */}
            <div className="solution-filter">
                <label for="solution-language">Solution Language:</label> <select name="solution-language" id="solution-language" onChange={onLangChange}>
                <option value="All">All</option>
                <option value="javascript">JavaScript</option>
                <option value="ruby">Ruby</option>
                <option value="python">Python</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                </select>
            </div>
            <div className="problem-card">
                <p> <strong>Difficulty: </strong>{problem.difficulty}</p>
            <h4 className="question">{problem.question}</h4>
            </div>
        </div>

    )

}

export default ProblemCard
