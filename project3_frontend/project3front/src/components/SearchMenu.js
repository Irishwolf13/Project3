import React, {useState, useEffect} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom"
import search_icon from "../assets/search-icon.png"
import MainSpace from './MainSpace';


function SearchMenu({helperSetSearch}) {
    const [startDate, setStartDate] = useState(new Date());
    const [myProblems, setMyProblems] = useState([])
    const [myDifficulty, setMyDifficulty] = useState("easy")

    // console.log(myProblems.filter(item => item.difficulty == "easy").filter(item => item.date == 1))
    // console.log("myDate" + startDate.getDate())

    useEffect(() => {
      fetch(`http://localhost:9292/problems`)
      .then(res => res.json())
      .then(problemData => {
        setMyProblems(problemData)
    })
    }, [])

    const handleButtonClick = () => {
      let currentDate = startDate.getDate()
      let currentDifficulty = myDifficulty
      // console.log(currentDate)
      // console.log(currentDifficulty)
      let filterByDif = myProblems.filter(problem => problem.difficulty == currentDifficulty)
      let filterByDate = filterByDif.filter(problem => problem.date == currentDate)
      if (filterByDate.length > 0) {
        helperSetSearch(filterByDate[0].id)
      }else{
        helperSetSearch(1)
      }
    }
 return (
    <>
      <div className="flex justify-center mt-16">
        {/* This is the outer div of the search menu, tailwind styles for it are stored in index.css */}
        <div className="window-outer w-56 mt-6">

          {/* This is the blue bar with title and icon for the search menu */}
          <div className="title-bar">
            <img src={search_icon} alt="navbar icon" className="inline-block px-1 h-5"/>
            <h1 className="inline-block pl-2">Search Menu</h1>
          </div>

            {/* This is the inner div of the search menu, tailwind styles for it are stored in index.css*/}
            <div className="relative w-full h-fit left-0.5">
              <div className="window-inner-with-bar">
              {/* Calendar */}
              <div className="border-2 border-dashed border-black w-full p-1 my-1">
                <p className="inline-block pr-1">Date: </p>
                <div className="inline-block">
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
              </div>

              {/* language */}
              {/* <div className="language-selector">

                <label for="languages">Language</label> <select name="languages" id='languages'>
                  <option value="All">All</option>
                  <option value="javascript">JavaScript</option>
                  <option value="ruby">Ruby</option>
                  <option value="python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C++">C++</option>
                  <option value="C#">C#</option>
                </select>
              </div> */}

              {/* difficulty */}
              <div className="border-2 border-black border-dashed w- p-1 my-1">
                <label for="difficulty-level">Difficulty: </label> <select onChange={(e) => setMyDifficulty(e.target.value)} name="difficulty-level" id="difficulty-level">
                  <option value="easy">Easy</option>
                  <option value="medium">Intermediate</option>
                  <option value="hard">Advanced</option>
                </select>
              </div>
              <div className="relative top-1.5 left-2">
                <NavLink to="/" onClick={handleButtonClick} className="comment-button">Search</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
 )
}

export default SearchMenu
