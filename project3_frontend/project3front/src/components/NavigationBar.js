import React, {useState} from "react"
import Login from "./Login"
// import User from "./User"
 import SearchMenu from "./SearchMenu"


function NavigationBar(){
    const [loggingIn, setLoggingIn] = useState(false)
    const [searchToggle, setSearchToggle] = useState(false)

    function handleLoggingIn(){
        setLoggingIn(!loggingIn)
    }

    function handleSearchToggle(){
        setSearchToggle(!searchToggle)
    }
    let user = "user placeholder"
    return (
    <>
      <div className="absolute inline-block z-0 h-[45.6rem] w-1/6 bg-slate-300 border-r-2 border-solid border-black">
        <h1>navbar</h1>
      </div>
      <div className="nav-bar">
        <div> {user} / <button onClick={handleLoggingIn}>{loggingIn ? "logout" : "login"}</button></div>
        {loggingIn ? <Login/> : null}

        <div id="solves">
          <button>Solves</button>
        </div>

        <div id="search">
          <button onClick={handleSearchToggle}>Search</button>
          {searchToggle ? <SearchMenu/> : null}
        </div>
      </div>
     </>   
    )
}

export default NavigationBar
