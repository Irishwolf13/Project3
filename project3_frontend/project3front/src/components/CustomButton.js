import React from "react";

function CustomButton({ buttonImage }) {
    return (
        <button className="custom-button">
            <img src={buttonImage} alt="button image" className="relative w-[80%] left-0.5 active:top-0.5"/>
        </button>
    )
}

export default CustomButton;