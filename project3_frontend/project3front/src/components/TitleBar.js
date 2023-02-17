import React, { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar'
import windows_logo from "../assets/windows-logo.png"
import main_logo from "../assets/main-logo.png"

function TitleBar({ handleNavbarToggle }) {

    return (
        <>
            {/* This is the actual gray "taskbar" spanning the width of the page, it holds the start menu and title item */}
            <div className="fixed w-full flex z-20 top-0 bg-[#c0c7c8] h-12 border-solid border-b-black border-b-2 shadow-inner">

                {/* This is the start button tailwind/code, also stored in the index.css file */}
                <button className="start-button" onClick={handleNavbarToggle}>
                    <div className="relative active:top-0.5">
                        <img src={windows_logo} alt="windows logo" className="inline-block relative top-0.5 h-8 pl-1 float-left"/>
                        <p className="inline-block font-win95bold text-lg">Start</p>
                    </div>
                </button>

                {/* This is the title "taskbar item", going to move this tailwind into index.css */}
                <div className="my-1 mx-2 bg-gray-200 absolute left-24 inline-block border-solid border-2 border-t-black border-l-black border-b-white border-r-white h-[84%] min-w-[240px] w-1/6 p-1">
                    <img src={main_logo} alt="windows logo" className="inline-block relative top-0.5 h-6 px-1 float-left"/>
                    <p className="font-win95 relative top-0.5">Tatiana's Code Challenge</p>
                </div>
            </div>
        </>
    )
}

export default TitleBar
