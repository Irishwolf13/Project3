import React from "react"
import windows_logo from "../assets/windows-logo.png"

function TitleBar() {
    return (
        <div className="top-0 bg-[#c0c7c8] h-12 border-solid border-b-black border-b-2 shadow-inner">
            <button className="start-button">
                <img src={windows_logo} alt="windows logo" className="inline-block h-8 pl-1 float-left"/>
                <p className="inline-block font-win95bold text-lg">Start</p>
            </button>
        </div>
    )
}

export default TitleBar
