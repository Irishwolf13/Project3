import React from "react"

function SubmitSolve(){
    // usestate and POST REQUEST
 return (
  <div className="border-2 border-solid border-black mx-auto w-4/6 bg-slate-300 m-6 h-48">
    <div>
        <form>
        <label for="languages">Language</label> <select name="languages" id='languages'>
        <option value="javascript">JavaScript</option>
        <option value="ruby">Ruby</option>
        <option value="python">Python</option>
        <option value="Java">Java</option>
        </select>
            <textarea
                type="text"
                name="solve"
                placeholder="enter solve"
                // value={}
                // onChange={}
            />
            <button type="submit">Submit Solve</button>
        </form>
    </div>
  </div>
 )
}


export default SubmitSolve
