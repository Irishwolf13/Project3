import React, {useState} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import search_icon from "../assets/search-icon.png"


function SearchMenu() {
    const [startDate, setStartDate] = useState(new Date());
 return (
    <>
      {/* This is the outer div of the search menu, tailwind styles for it are stored in index.css */}
      <div className="search-outer">

        {/* This is the blue bar with title and icon for the search menu */}
        <div className="absolute inline-block bg-[#0000a8] w-[98%] h-7 top-0.5">
          <img src={search_icon} alt="navbar icon" className="inline-block px-1 h-5"/>
          <h1 className="inline-block font-win95bold text-white top-2 pl-1">Search Menu</h1>
        </div>

        {/* This is the inner div of the search menu, tailwind styles for it are stored in index.css*/}
        <div className="search-inner">
          {/* Calendar */}
          <div className="calendar">
            <p className="inline-block pr-1">Date:</p>
            <div className="inline-block">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          {/* language */}
          <div className="language-selector">

            <label for="languages">Language</label> <select name="languages" id='languages'>
             <option value="All">All</option>
              <option value="javascript">JavaScript</option>
              <option value="ruby">Ruby</option>
              <option value="python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
            </select>
          </div>

        {/* difficulty */}
          <div className="difficulty-selector">
            <label for="difficulty-level">Difficulty</label> <select name="difficulty-level" id="difficulty-level">
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>
    </>
 )
}

export default SearchMenu
