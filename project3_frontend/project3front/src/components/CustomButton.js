import React from "react";

function CustomButton({ buttonImage, clickEvent }) {
    return (
        <button className="custom-button" onClick={clickEvent}>
            <img src={buttonImage} alt="button image" className="relative w-[80%] left-0.5 active:top-0.5"/>
        </button>
    )
}

export default CustomButton;