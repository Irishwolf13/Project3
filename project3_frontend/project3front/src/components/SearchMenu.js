import React, {useState} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SearchMenu() {
    const [startDate, setStartDate] = useState(new Date());
 return (
    <div className="search-menu">

        {/* Calendar */}
        <div className="calendar">
            Date:
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>

        {/* language */}
    <div className="language-selector">
      <label for="languages">Language</label> <select name="languages" id='languages'>
        <option value="javascript">JavaScript</option>
        <option value="ruby">Ruby</option>
        <option value="python">Python</option>
        <option value="Java">Java</option>
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
 )
}

export default SearchMenu
