import React from "react"
import windows_logo from "../assets/windows-logo.png"
import main_logo from "../assets/main-logo.png"

function TitleBar() {
    return (
        <div className="flex op-0 bg-[#c0c7c8] h-12 border-solid border-b-black border-b-2 shadow-inner">
            <button className="start-button">
                <div className="active:border-t-solid active:border-gray-300 active:border-t-2">
                    <img src={windows_logo} alt="windows logo" className="inline-block relative top-0.5 h-8 pl-1 float-left"/>
                    <p className="inline-block font-win95bold text-lg">Start</p>
                </div>
            </button>
            <div className="m-1 bg-gray-300 relative inline-block border-solid border-2 border-t-black border-l-black border-b-white border-r-white h-[84%] w-1/6 p-1">
                <img src={main_logo} alt="windows logo" className="inline-block relative top-0.5 h-6 px-1 float-left"/>
                <p className="font-win95 relative top-0.5">Tatiana's Code Challenge</p>
            </div>
        </div>
    )
}

export default TitleBar
