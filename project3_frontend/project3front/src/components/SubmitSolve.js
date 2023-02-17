import React, { useState } from "react"

function SubmitSolve( { problem, helperRefresh }){
  const [solveInput, setSolveInput] = useState("")

  const handleInput = (e) => {
    setSolveInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let currentLanguage = e.target.form.languages.value
    fetch(`http://localhost:9292/solutions`, {
      method: 'POST', headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: 1,
        problem_id: problem.id,
        language: currentLanguage,
        num_of_likes: 0,
        solve: solveInput
      })
    })
    .then(res => res.json())
    .then(res => helperRefresh(res))

    setSolveInput("")
  }

 return (


  <div className="window-outer w-5/6 m-8">
    <div className="title-bar px-2">Submit Your Solution</div>
        <form className="relative w-full left-1 h-fit">
          <div className="window-inner-with-bar my-0">
            <textarea
              type="text"
              name="solve"
              placeholder="enter solve"
              value={solveInput}
              onChange={handleInput}
              className="w-full h-48"
            />
          </div>

          <div className="inline-block">
            <label for="languages">Language</label>
            <select name="languages" id='languages' className="">
              <option value="javascript">JavaScript</option>
              <option value="ruby">Ruby</option>
              <option value="python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
            </select>
          </div>
            <button type="submit" onClick={handleSubmit} className="comment-button right-1">
              Submit Solve
            </button>
        </form>
  </div>
 )
}

export default SubmitSolve
