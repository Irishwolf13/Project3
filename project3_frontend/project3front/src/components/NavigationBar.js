import React, {useState} from "react"
import Login from "./Login"
// import User from "./User"
 import SearchMenu from "./SearchMenu"
 import { NavLink } from "react-router-dom"
 import search_icon from "../assets/search-icon.png"
 import folder_icon from "../assets/folder-icon.png"
 import answer_icon from "../assets/answer-icon.png"
 import login_icon from "../assets/login-icon.png"
 import user_icon from "../assets/user-icon.png"
 import home_icon from "../assets/home-icon.png"


function NavigationBar({ logStatus, helperLoggingIn, helperLogStatus, handleNavbarToggle }){
    const [loggingIn, setLoggingIn] = useState(false)

    function handleLogInClick(){
      if (logStatus != 'Log In'){
        alert('You have been logged out.')
        helperLogStatus('Log In')
      }
      setLoggingIn(!loggingIn)
    }

    const hideLogInWindow = () => {
      setLoggingIn(!loggingIn)
    }
    let user = "Guest"

    return (
    <>
        {/* This is the outer portion of the navbar, any tailwind for this specific element is in index.css */}
        <div className="navbar-outer">

            {/* This is the blue bar with words in it on the actual navbar element
            <div className="absolute inline-block bg-[#0000a8] w-[98%] h-7 top-0.5">
                <img src={folder_icon} alt="navbar icon" className="inline-block px-1 h-5"/>
                <h1 className="inline-block font-win95bold text-white top-2 pl-1">Navbar</h1>
            </div> */}

            <div className="inline-block relative top-0 w-10 bg-[#808080] p-1" style={{writingMode: 'vertical-lr'}}>
                <p className="relative inline-block float-right transform rotate-180 font-bold text-[#c0c7c8] text-xl">(Not)Windows
                    <p className="relative inline-block text-white text-xl top-1 font-normal">95</p>
                </p>
            </div>

            {/* This is the inner portion of the navar, all tailwind for it is stored in index.css */}
            <div className="navbar-inner">

                {/* This is the user info section
                <div className="p-2 h-1/6 bg-cyan-300">
                    <img src={user_icon} alt="user icon" className="inline-block h-6 float-left"/>
                    <p className="float-left pl-2">
                        {user}
                    </p>
                </div> */}

                {/* This is the login / logout button */}
                <button onClick={handleLogInClick} className="navbar-button">
                    <img src={login_icon} alt="login icon" className="inline-block h-6 float-left"/>
                    <p className="float-left pl-2">
                        {logStatus}
                    </p>
                </button>
                {loggingIn ? <Login helperLoggingIn={helperLoggingIn} hideLogInWindow={hideLogInWindow}/> : null}

                {/* This is the button for Tatiana's Question of the Day */}
                <NavLink to="/" className="navbar-button" onClick={handleNavbarToggle}>
                    <img src={home_icon} alt="answer icon" className="inline-block h-6 float-left "/>
                    <p className="float-left pl-2">Tatiana's Code Challenge</p>
                </NavLink>

                {/* This is the button for solves */}
                <NavLink to="/solutions" className="navbar-button" onClick={handleNavbarToggle}>
                    <img src={answer_icon} alt="answer icon" className="inline-block h-6 float-left "/>
                    <p className="float-left pl-2">Solves</p>
                </NavLink>

                {/* This is the button for the search menu */}
                <NavLink to="/search" className="navbar-button" onClick={handleNavbarToggle}>
                    <img src={search_icon} alt="search icon" className="inline-block h-6 float-left"/>
                    <p className="float-left pl-2">Search</p>
                </NavLink>
            </div>
        </div>
    </>
    )
}

export default NavigationBar
