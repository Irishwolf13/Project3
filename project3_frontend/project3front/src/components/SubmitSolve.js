import React, { useState } from "react"
import solution_image from "../assets/save-icon.png"

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
    <div className="title-bar px-2">
      <img src={solution_image} alt="navbar icon" className="inline-block px-1 h-5"/>
      <p className="inline-block pl-2">
        Submit Your Solution
      </p>
    </div>
        <form className="relative w-full left-1 h-fit">
          <div className="window-inner-with-bar my-0">
            <textarea
              type="text"
              name="solve"
              placeholder="Enter solution..."
              value={solveInput}
              onChange={handleInput}
              className="w-full h-48"
            />
          </div>

          <div className="relative inline-block font-win95 border-t-black border-l-black border-b-white border-r-white border-2 border-solid px-1 top-0.5 bg-gray-300">
            <label for="languages">Language: </label>
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
